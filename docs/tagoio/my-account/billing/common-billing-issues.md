---
title: "Common Billing issues"
description: "This article explains common reasons a card charge may be declined and how to find more information about a specific decline, including what TagoIO can and cannot determine from the error information."
tags: ["tagoio"]
---
## Why was a charge declined?

Declines can occur for many reasons determined by the cardholder’s bank. Each bank uses a system that considers various signals, such as the cardholder’s spending habits, account balance, and card information like the expiration date and CVV/CVC security number.

Since these signals change over time, a card that was previously successful may be declined for a future charge.

> Even if all card information is correct and the cardholder previously had a successful payment, a future charge can still be declined by the bank.

## Finding out more information about a specific decline

TagoIO displays all information we receive from the cardholder’s bank and the payment processor about a decline in the error message. Because of this, we do not have additional details beyond the error information provided to us.

> If the card information (card number, expiration date, CVV/CVC) is correct but there is still trouble checking out, the cardholder needs to contact their bank.

The cardholder’s bank is the entity declining the charge and sending the error. Therefore, only the bank can explain why the transaction was declined and how to resolve the issue.

## Error Messages

“Your card does not support this type of purchase."

- Some debit cards require a PIN to be entered. If the cardholder is using one of these cards, they'll need to use another card to make the purchase.
- Some cards have restrictions on international purchases. If the card was issued in a country other than where your business is located, this might be the problem. In this case, the cardholder needs to contact their bank.
- Some cards (often corporate cards or FSA cards) can only be used for certain business categories, like travel or healthcare.

“Your card is not supported.”

- Some payment processors restrict card brands (i.e. Discover, Mastercard) based on the country your store is located in. For example, Stripe currently doesn't support Discover cards in Canada.
- The cardholder needs to use a different brand of card that would be supported for the country where your store is located.

“Your card has insufficient funds.”

- The cardholder's bank is saying that they don't have enough funds in their account to cover the costs of the purchase.
- Sometimes cardholders banks don't properly assess the risk of currency conversion of purchases. If they see that the purchase is in a different currency the bank will decline the charge as insufficient funds so the currency conversion or the currency conversion fee doesn't overdraw the account.
- If a cardholder sees this error message, they should contact their bank.