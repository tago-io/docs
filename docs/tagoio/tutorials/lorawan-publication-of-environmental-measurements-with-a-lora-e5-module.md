---
title: "LoRaWAN Publication of Environmental Measurements with a LoRa-E5 Module"
description: "This article explains how to publish environmental sensor measurements over LoRaWAN using a Grove LoRa‑E5 module and a NUCLEO-WB55 board, integrating with The Things Network (TTN) and TagoIO, and includes the required hardware and basic assembly steps."
tags: ["tagoio"]
---
This tutorial explains how to implement a LoRaWAN publication on The Things Network (TTN) with a TagoIO integration using a MicroPython driver for a Grove LoRa‑E5 module. It was originally posted in French at https://stm32python.gitlab.io/fr/docs/Micropython/grove/lora-e5 and credits Julien Terrier and Yannick Marietti.

To learn more about LoRa and LoRaWAN, consult this page (link to a general LoRa/LoRaWAN overview). For a deeper technical explanation, read the document by Sylvain Montagny (University of Savoie—Mont Blanc) (link to Sylvain Montagny's LoRa/LoRaWAN document). Additional references are available at the end of the full tutorial.

## Required materials and assembly

1. For the connected device (the NUCLEO‑WB55 board used in this tutorial), a Grove LoRa‑E5 module from Seeed Studio was chosen. The module uses the STM32WLE5JC System on Chip (SoC) from STMicroelectronics.
2. For the LoRaWAN gateway, the Things Indoor Gateway (TTIG) was chosen.

Minimum items:
- A TTIG LoRa‑WiFi gateway
- A Grove LoRa‑E5 module

Our connected device will consist of the following components:

1. A basic Grove extension board with its power switch set to the 3.3 V position  
2. A NUCLEO‑WB55 board  
3. A Grove BME280 module (environmental sensor)

**Assembly steps**

- Place the Grove extension board onto the NUCLEO board.  
- Connect the BME280 module to an I²C connector on the Grove extension board.  
- Mount the Grove LoRa‑E5 module on a UART connector (D9).  
- Connect the Grove extension board to your computer using the NUCLEO board USB port.

**Obtaining the DevEUI and DevAddr of the LoRa‑E5 module**

The Grove LoRa‑E5 module communicates over UART with AT commands. To query its unique identifiers, use a MicroPython script that sends AT commands and prints the responses.  
Below is a minimal `main.py` example that you can copy to your computer and flash onto the NUCLEO board (see flashing instructions in the next section).

```python
# Purpose of the script: Sending / Receiving messages via UART in command line mode
# This script is useful for communicating with modules equipped with AT firmwares.

from machine import UART, const

DELAY_TIMEOUT = const(1000)          # Duration (in milliseconds) during which the UART waits to receive a message
BAUDRATE      = const(9600)          # Communication speed, in bauds
UART_NUMBER   = const(2)             # Identifier of the NUCLEO‑WB55 board's UART to be used
RX_BUFF       = const(512)           # Size of the reception buffer (received messages will be truncated to this number of characters)
EOC           = "\r\n"               # Command termination to validate sending

uart = UART(UART_NUMBER, BAUDRATE, timeout=DELAY_TIMEOUT, rxbuf=RX_BUFF)

@micropython.native
def Reception(uart_object):
    message_received = uart_object.read()
    if not (message_received is None):
        print("Message received: \r\n" + message_received.decode("utf-8"))

irq_uart = uart.irq(Reception, UART.IRQ_RXIDLE, False)

@micropython.native
def Emission():
    print("Enter your command")
    while True:
        message_sent = input()
        uart.write(message_sent + EOC)
        print("Sent: " + str(message_sent))

Emission()
```

After flashing this script, open a serial terminal (e.g., PuTTY) to the board’s UART.  
Type `AT` and press ENTER; you should see:

```
Message received:+AT:OK
```

Then type `AT+ID` to retrieve the identifiers:

```
Message received:
+ID:DevAddr,44:10:BA:4A
+ID:DevEui,2C:F7:F1:20:44:10:BA:4A
+ID:AppEui,00:00:00:00:00:00:00:00
```

Keep the `DevEui` and `DevAddr` values for later use when configuring TTN.

## Firmware and MicroPython driver

To use the LoRa‑E5 module, this tutorial uses a MicroPython firmware built for the STM32WB series (stm32wb5x) with LoRa API support. The LoRa‑E5 MicroPython driver source and related documentation are available here: https://stm32python.gitlab.io/fr/docs/Micropython/grove/lora-e5

You will need the appropriate firmware and driver for the STM32WLE5JC-based module and instructions for flashing the NUCLEO board with the MicroPython image. (Refer to the linked MicroPython Grove LoRa‑E5 documentation for specific build and flashing steps.)

**Flashing the firmware**

1. Download the latest `stm32wb5x-micropython.bin` from the official repository.  
2. Connect the NUCLEO board via USB, put it into DFU mode (hold the BOOT0 button while powering on).  
3. Use STM32CubeProgrammer or `dfu-util` to flash the binary onto the board.

**Joining a private LoRaWAN network**

Once the firmware is running and you have obtained the DevEui/DevAddr, use the following script to configure the module for OTAA join with TTN:

```python
# Importing different drivers
import machine
from stm32_LoRa import *
from utime import sleep_ms

UART_WB55 = const(2)

devAddr  = "44 10 BA 4A"          # Obtained with AT+ID
appEui   = "00 00 00 00 00 00 00 00"
appKey   = "55 10 67 98 B2 15 EE 4E D0 33 19 DC 65 27 88 AB"  # Obtained from TTN

loRa = LoRa(9600, UART_WB55, DataReceiveCallback=None)

status = loRa.setIdentify(DevAddr=devAddr, AppEui=appEui, AppKey=appKey)

def PrintLoRaParameters():
    identify = loRa.getIdentify()
    if identify != -1:
        print("#####################################################################")
        print("########## INITIALIZE ########")
        print("#####################################################################")
        print("LORA_DRIVER_VERSION: " + loRa.getDriverVersion())
        print("#### " + loRa.getMode() + " ####")
        print("#### AppKey: " + identify["AppKey"])
        print("#### DevEUI: " + identify["DevEui"])
        print("#### AppEUI: " + identify["AppEui"])
        print("#### DevAddr: " + identify["DevAddr"])
    else:
        print("#### = Read identify fail. Reboot!")
        sleep_ms(2000)
        machine.reset()

def JoinNetwork():
    joinStatus = False
    tryJoin = 0
    while not joinStatus:
        print("#### = Try join n°" + str(tryJoin+1))
        status = loRa.join()
        if status == -1:
            print("#### = Join Fail, retry in 10 seconds.")
            tryJoin += 1
        else:
            joinStatus = True
            print("#### = Join success.")

PrintLoRaParameters()
JoinNetwork()
```

After running this script (e.g., via PuTTY), you should see a “Join success” message indicating that the module has joined TTN.

**Publishing BME280 measurements**

Once the device is connected to TTN, use the following script to read data from the BME280 sensor and send it in a compact hexadecimal payload:

```python
# Importing different drivers
import machine
from stm32_LoRa import *
from utime import sleep_ms

UART_WB55 = const(2)

devAddr  = "44 10 BA 4A"
appEui   = "00 00 00 00 00 00 00 00"
appKey   = "55 10 67 98 B2 15 EE 4E D0 33 19 DC 65 27 88 AB"

def DataReceived(Port=0, DataReceived=b""):
    print("#### = Data received")
    print(f"Data received on PORT: {Port}, Size = {len(DataReceived)}, Data = {[hex(x) for x in list(DataReceived)]}")

loRa = LoRa(9600, UART_WB55, DataReceiveCallback=DataReceived)

status = loRa.setIdentify(DevAddr=devAddr, AppEui=appEui, AppKey=appKey)

def PrintLoRaParameters():
    identify = loRa.getIdentify()
    if identify != -1:
        print("#####################################################################")
        print("########## INITIALIZE ########")
        print("#####################################################################")
        print("LORA_DRIVER_VERSION : " + loRa.getDriverVersion())
        print("#### " + loRa.getMode() + " ####")
        print("#### AppKey: " + identify["AppKey"])
        print("#### DevEUI: " + identify["DevEui"])
        print("#### AppEUI: " + identify["AppEui"])
        print("#### DevAddr: " + identify["DevAddr"])
    else:
        print("#### = Read identify fail. Reboot!")
        sleep_ms(2000)
        machine.reset()

def JoinNetwork():
    joinStatus = False
    tryJoin = 0
    while not joinStatus:
        print("#### = Try join n°" + str(tryJoin+1))
        status = loRa.join()
        if status == -1:
            print("#### = Join Fail, retry in 10 seconds.")
            tryJoin += 1
        else:
            joinStatus = True
            print("#### = Join success.")

def GetSendData():
    TEMPO = const(600000)   # 10 minutes
    from time import sleep_ms
    from machine import I2C
    import bme280

    i2c1 = I2C(1)
    sleep_ms(1000)
    print("I2C addresses used: " + str(i2c1.scan()))
    sensor = bme280.BME280(i2c=i2c1)

    trySend = 0
    NB_BYTES = const(5)
    loRaFrame = [0x00] * NB_BYTES

    while True:
        bme280data = sensor.values
        temp, press, humi = bme280data[0], bme280data[1], bme280data[2]
        print("="*40)
        print(f"Temperature: {temp:.1f} °C")
        print(f"Pressure: {press} hPa")
        print(f"Relative Humidity: {humi}%")

        temp = int(temp * 10)
        press = int(press * 10)
        humi = int(humi * 2)

        loRaFrame[0] = (temp >> 8) & 0xFF
        loRaFrame[1] = temp & 0xFF
        loRaFrame[2] = (press >> 8) & 0xFF
        loRaFrame[3] = press & 0xFF
        loRaFrame[4] = humi

        print("#### = Send data.")
        sendStatus = loRa.sendData(loRaFrame, Port=1, NeedAck=False)
        if sendStatus == -1:
            print("#### = Join fail.")
            trySend += 1
            if trySend > 5:
                machine.reset()
        else:
            print("#### = Send success.")
            trySend = 0

        loRa.enterLowPowerMode()
        sleep_ms(TEMPO)
        pyb.wfi()

PrintLoRaParameters()
JoinNetwork()
GetSendData()
```

**Important parameters**

- `appEui` must remain `00 00 00 00 00 00 00 00`.  
- `appKey` is obtained when creating the application in TTN.  
- The `devAddr`, `appEui`, and `appKey` values must be correctly filled for a successful join.

**Optional: Configuring communication channels for TTN**

To optimize channel usage, send the following AT commands to the module (e.g., via the AT command script above):

```
AT+CH=3,867.1,DR0,DR5
AT+CH=4,867.3,DR0,DR5
AT+CH=5,867.5,DR0,DR5
AT+CH=6,867.7,DR0,DR5
AT+CH=7,867.9,DR0,DR5
```

These commands can be integrated into the initialization of the `stm32_LoRa.py` driver.

## Credits and original post

This tutorial is based on the original French post found at the stm32python GitLab pages (link above). All credit for the MicroPython driver and original instructions go to Julien Terrier and Yannick Marietti.