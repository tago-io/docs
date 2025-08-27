---
title: "Zoho SalesIQ"
description: "This article explains how to integrate a TagoIO RUN application with Zoho SalesIQ by obtaining the SalesIQ widget key and placing it into the RUN setup. It includes the steps to create a SalesIQ account, retrieve the widget key, enable visitor tracking, and where to paste the key in TagoIO."
tags: ["tagoio"]
---
You can easily integrate your RUN application with Zoho SalesIQ to track and engage users. All you need to do is use your SalesIQ key in the RUN setup.

## Steps to integrate

1. Create an account at https://www.zoho.com/salesiq/
2. Copy the key (only the key value shown after `widgetcode:` in the SalesIQ script).
3. Enable Visitor Tracking for your RUN URL.

![SalesIQ widget setup screenshot](/docs_imagem/tagoio/zoho-salesiq-2.png)

Note from SalesIQ UI:
- To start using SalesIQ, you need to add the code to all the pages of your website.
- Copy and paste this code right before the closing `</body>` tag of your website's HTML source code.
- If you wish to add the live chat widget on your website, make sure to check the Add Live Chat option below the code (as shown in the SalesIQ UI).

Example SalesIQ script (the widget key appears after `widgetcode:` — copy only the key value):

```javascript
<script type="text/javascript">
var $zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
  widgetcode: '395ca1144dea395ca395ca5be4df2d279605b5a9f20ea395ca52683595ca',
  values: {},
  ready: function(){}
};
var d = document, s = d.createElement('script');
s.type = 'text/javascript';
s.id = 'zsiqscript';
s.defer = true;
s.src = 'https://salesiq.zoho.com/widget';
var t = d.getElementsByTagName('script')[0];
t.parentNode.insertBefore(s, t);
d.write('<div id="zsiqwidget"></div>');
</script>
```

4. Then, back in TagoIO, open your RUN setup page. Under Integration > User Engagement, paste the key (the value you copied after `widgetcode:`) in the SalesIQ Key field.

![RUN integration screenshot](/docs_imagem/tagoio/Screen-20Shot-202020-02-07-20at-205.44.26-20AM-NTA.png)

## Notes and reminders

- Only paste the key value (not the entire script) into the SalesIQ Key field in the RUN setup.
- Make sure Visitor Tracking is enabled for your RUN URL so SalesIQ can track visitors.
- If you need the SalesIQ script itself on your website, insert it just before the closing `</body>` tag on each page you want tracked or where you want the live chat widget to appear.
- In the RUN integration UI, the field may be labeled “Zoho ID” but it accepts the same key value used in the SalesIQ Key field.
- With SalesIQ integrated, you can see who visits your RUN, when they visit, how long they stay, and what browser/device they use. You also have the option to enable live chat, bots, remote screen access, analytics, and GDPR‑compliant cookie notices directly from the SalesIQ dashboard.

Related internal docs:
- See [User Engagement](https://help.tago.io/) (refer to the User Engagement documentation)
- See [Google Analytics](https://help.tago.io/) (refer to the Google Analytics documentation)
- See [Notifications for Users using Analysis](https://help.tago.io/)
- See [Security and Protection for RUN users](https://help.tago.io/)
- See [Run Theme](https://help.tago.io/)