---
title: "Notifications for Users using Analysis"
description: "This article explains how to send notifications to TagoRUN users using Analysis, how to configure notification buttons and their behaviors, and the basic customizable options available for notification actions."
tags: ["tagoio", "analysis"]
---
The Analysis feature is a powerful tool in TagoIO and supports sending Notifications to TagoRUN users. This article describes how to send a notification using Analysis, how to use notification buttons, and how to handle user decisions within your notifications. For more details about Analysis and buttons, see [Analysis](/docs/tagoio/analys/) and [buttons](/docs/tagoio/widgets/push-button-widget).

![Notification example showing a Refrigerator Alarm card with a call-to-action link](/docs_imagem/tagoio/notifications-for-users-using-analysis-2.png)

## Customized Notifications

When sending a notification using Analysis, the primary interactive feature is buttons. You can include up to four buttons in a single notification. Each button can be configured to perform one of several behaviors:

- Redirect to a TagoIO page.
- Redirect to an external link.
- Trigger an Analysis when pressed.

You also have a few customizable options:

- Set the button label.
- Set the button color.

## How to Setup an Analysis

We provide you with an Analysis template that will have a code for a demonstration. The following analysis does send a notification to all your users with given tags.

Follow these instructions to set up your analysis and send the notifications. You can make any change to the analysis after it is installed in your account, to properly fit your needs.

1. Go to your account settings by clicking on the upper corner of TagoIO page and enter [My Account](https://admin.tago.io/account/).
2. Select your Profile in the sidebar.
3. Go to the Tokens Section, create a new token with **Expire In** set to *Never* and copy the Token.
4. Install the [Analysis Template](http://admin.tago.io/template/5d51de52171477001b203458).
5. Go to the Environment Variables of your analysis.
6. Replace the field value `"Your Account Token Here"` with the token you copied in step 3.
7. Fill the field values for **tag key** and **tag value** to match at least one of the tags of your users in the User Management.
8. If you didn't set up a tag for any of your users, go to [User Management](/docs/tagoio/account/user-management), enter one of your users, and create a tag key and value in the Tags section.
9. Press **Save** and **Run** to start your analysis and send a notification to your users.

With this all up and running, you can open the script of your analysis and start to change it as needed. The code is fully commented on and detailed to guide you.

You can also create an [Action](/docs/tagoio/actions/) to trigger the Analysis or set it to run every X minutes.

## The Notification Object

You will notice it in the Analysis code, this is a quick copy‑and‑paste for you to use.

```json
{
  "title": "title of your notification",
  "message": "message of your notification",
  "buttons": [
    {
      "label": "label of the button",
      "id": "id_of_the_button", // no space allowed
      "color": "color of the button",
      "url": "url to redirect the user",
      "analysis": "analysis to run when clicked"
    }
  ],
  "buttons_autodisable": true // auto disable the buttons when one is clicked.
}
```

## On this page

- [Customized Notifications](#customized-notifications)
- [How to Setup an Analysis](/docs/tagoio/analys/creating-analysis)
- [The Notification Object](../notifications/notification)