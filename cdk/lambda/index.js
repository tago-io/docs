// Lambda@Edge function for redirecting help.tago.io, changelog.tago.io, and api.docs.tago.io
// Handler for viewer-request events
// Node.js 22 runtime

exports.handler = async (event) => {
  const request = event.Records[0].cf.request;
  const uri = request.uri;
  const headers = request.headers;
  const host = headers?.host?.[0]?.value || "";

  // Helper function to create redirect response
  function createRedirect(location) {
    return {
      status: "301",
      statusDescription: "Moved Permanently",
      headers: {
        location: [{ key: "Location", value: location }],
      },
    };
  }

  // 0) Any request to changelog.tago.io → docs.tago.io/changelog
  if (host === "changelog.tago.io") {
    return createRedirect("https://docs.tago.io/changelog");
  }

  // 0b) Any request to api.docs.tago.io → docs.tago.io/docs/api/sidebar/tagoio-api-intro
  if (host === "api.docs.tago.io") {
    return createRedirect("https://docs.tago.io/docs/api/sidebar/tagoio-api-intro");
  }

  // This function is attached to help.tago.io distribution.
  // 1) Root -> support portal
  if (uri === "/" || uri === "") {
    return createRedirect("https://support.tago.io");
  }

  // 2) Community paths -> community forum
  if (uri === "/portal/en/community" || uri === "/portal/en/community/") {
    return createRedirect("https://community.tago.io");
  }

  if (uri === "/portal/en/community/tagoio" || uri === "/portal/en/community/tagoio/") {
    return createRedirect("https://community.tago.io/c/tagoio");
  }

  if (uri === "/portal/en/community/tagorun" || uri === "/portal/en/community/tagorun/") {
    return createRedirect("https://community.tago.io/c/tagorun");
  }

  if (uri === "/portal/en/community/tagodeploy" || uri === "/portal/en/community/tagodeploy/") {
    return createRedirect("https://community.tago.io/c/tagodeploy");
  }

  // 3) Community topics -> community forum
  if (uri.indexOf("/portal/en/community/topic/") === 0) {
    const remainder = uri.substring("/portal/en/community/topic/".length);
    const topic = remainder.split("/")[0];
    if (!topic) {
      return createRedirect("https://community.tago.io");
    }
    return createRedirect(`https://community.tago.io/t/${topic}`);
  }

  // URL mappings - direct path mappings
  const urlMappings = {
    "/portal/en/kb/articles/1-getting-started": "/docs/tagoio/getting-started",
    "/portal/en/kb/articles/101-language-preferences":
      "/docs/tagoio/tagorun/getting-started/language-preferences",
    "/portal/en/kb/articles/102-the-things-network-lorawan":
      "/docs/tagoio/integrations/networks/the-things-network-lorawan",
    "/portal/en/kb/articles/104-script-editor":
      "/docs/tagoio/analysis/script-editor",
    "/portal/en/kb/articles/106-sharing-your-profile":
      "/docs/tagoio/profiles/team-management-sharing-your-profile",
    "/portal/en/kb/articles/107-using-the-device-emulator":
      "/docs/tagoio/devices/device-emulator/using-the-device-emulator",
    "/portal/en/kb/articles/108-embedding-widgets-to-your-website":
      "/docs/tagoio/widgets/general/embedding-widgets-to-your-website",
    "/portal/en/kb/articles/109-senet-network":
      "/docs/tagoio/integrations/networks/senet-network",
    "/portal/en/kb/articles/11-notification":
      "/docs/tagoio/getting-started/notification",
    "/portal/en/kb/articles/114-account-plans":
      "/docs/tagoio/my-account/billing/account-plans",
    "/portal/en/kb/articles/115-services-overview":
      "/docs/tagoio/profiles/services/",
    "/portal/en/kb/articles/116-adding-image-selector-field-on-forms":
      "/docs/tagoio/widgets/input-widgets/input-form/adding-image-selector-field-on-forms",
    "/portal/en/kb/articles/117-creating-dynamic-dropdown-selection-using-forms":
      "/docs/tagoio/widgets/input-widgets/input-form/creating-dynamic-dropdown-selection-using-forms",
    "/portal/en/kb/articles/118-building-your-own-parser":
      "/docs/tagoio/devices/payload-parser/building-your-own-parser",
    "/portal/en/kb/articles/12-mqtt-process-data-publish-it-and-subscribe-to-a-topic":
      "/docs/tagoio/integrations/networks/mqtt/mqtt-process-data-publish-it-and-subscribe-to-a-topic",
    "/portal/en/kb/articles/120-creating-analysis":
      "/docs/tagoio/analysis/creating-analysis",
    "/portal/en/kb/articles/122-defining-actions":
      "/docs/tagoio/actions/defining-actions",
    "/portal/en/kb/articles/123-sending-data-to-device":
      "/docs/tagoio/devices/sending-data-to-device",
    "/portal/en/kb/articles/125-network-integration":
      "/docs/tagoio/integrations/general/creating-a-network-integration",
    "/portal/en/kb/articles/127-files": "/docs/tagoio/files/",
    "/portal/en/kb/articles/129-everynet-lorawan":
      "/docs/tagoio/integrations/networks/everynet-lorawan",
    "/portal/en/kb/articles/134-filtering-out-variables-with-parser-code":
      "/docs/tagoio/devices/payload-parser/filtering-out-variables-with-parser-code",
    "/portal/en/kb/articles/135-displaying-locations-on-a-map-with-ttn-lorawan":
      "/docs/tagoio/tutorials/displaying-locations-on-a-map-with-ttn-lorawan",
    "/portal/en/kb/articles/137-loriot-lorawan":
      "/docs/tagoio/integrations/networks/loriot-lorawan",
    "/portal/en/kb/articles/140-uploading-files":
      "/docs/tagoio/files/uploading-files",
    "/portal/en/kb/articles/142-senra-network":
      "/docs/tagoio/integrations/networks/senra-network",
    "/portal/en/kb/articles/145-dashboard-icons":
      "/docs/tagoio/dashboards/dashboard-icons",
    "/portal/en/kb/articles/147-payload-parser":
      "/docs/tagoio/devices/payload-parser/",
    "/portal/en/kb/articles/149-distributing-analysis":
      "/docs/tagoio/analysis/distributing-analysis",
    "/portal/en/kb/articles/151-geofences-in-map-widgets":
      "/docs/tagoio/widgets/map-and-location/map-widget/geofences-in-map-widgets",
    "/portal/en/kb/articles/152-images-and-links-in-the-map-s-pins":
      "/docs/tagoio/widgets/map-and-location/map-widget/images-and-links-in-the-maps-pins",
    "/portal/en/kb/articles/153-map-filters":
      "/docs/tagoio/widgets/map-and-location/map-widget/map-filters",
    "/portal/en/kb/articles/157-adeunis-with-sigfox":
      "/docs/tagoio/tutorials/adeunis-with-sigfox",
    "/portal/en/kb/articles/158-adeunis-with-lorawan":
      "/docs/tagoio/tutorials/adeunis-with-lorawan",
    "/portal/en/kb/articles/159-machineq-lorawan":
      "/docs/tagoio/integrations/networks/machineq-lorawan",
    "/portal/en/kb/articles/16-grouping-dashboards":
      "/docs/tagoio/dashboards/grouping-dashboards",
    "/portal/en/kb/articles/160-orbiwise-lorawan":
      "/docs/tagoio/integrations/networks/orbiwise-lorawan",
    "/portal/en/kb/articles/161-sens-it-with-sigfox":
      "/docs/tagoio/tutorials/sensit-with-sigfox",
    "/portal/en/kb/articles/162-radiobridge-devices":
      "/docs/tagoio/tutorials/radiobridge-devices",
    "/portal/en/kb/articles/163-touchtag-lorawan-everynet":
      "/docs/tagoio/tutorials/touchtag-lorawan-everynet",
    "/portal/en/kb/articles/164-building-solutions":
      "/docs/tagoio/getting-started/building-solutions",
    "/portal/en/kb/articles/165-deploying-applications":
      "/docs/tagoio/getting-started/deploying-applications",
    "/portal/en/kb/articles/166-adding-devices-with-connectors":
      "/docs/tagoio/devices/adding-devices-with-connectors",
    "/portal/en/kb/articles/167-mobile-apps":
      "/docs/tagoio/tagorun/tagorun-mobile-app",
    "/portal/en/kb/articles/169-queclink-gps":
      "/docs/tagoio/tutorials/queclink-gps",
    "/portal/en/kb/articles/17-sharing-dashboards":
      "/docs/tagoio/dashboards/sharing-dashboards",
    "/portal/en/kb/articles/172-sigfox-downlink":
      "/docs/tagoio/integrations/networks/sigfox/sigfox-downlink",
    "/portal/en/kb/articles/174-running-analysis-as-external-using-node-js":
      "/docs/tagoio/analysis/running-analysis-as-external-using-nodejs",
    "/portal/en/kb/articles/177-mqtt-publishing-and-subscribing":
      "/docs/tagoio/integrations/networks/mqtt/mqtt-publishing-and-subscribing",
    "/portal/en/kb/articles/178-card-widget":
      "/docs/tagoio/widgets/displays/card-widget",
    "/portal/en/kb/articles/179-tile-widget":
      "/docs/tagoio/widgets/displays/tile-widget",
    "/portal/en/kb/articles/18-widgets-overview": "/docs/tagoio/widgets/",
    "/portal/en/kb/articles/180-step-button-widget":
      "/docs/tagoio/widgets/input-widgets/step-button-widget",
    "/portal/en/kb/articles/183-access-management":
      "/docs/tagoio/tagorun/access-management/",
    "/portal/en/kb/articles/184-creating-a-policy":
      "/docs/tagoio/tagorun/access-management/creating-a-policy",
    "/portal/en/kb/articles/185-defining-targets":
      "/docs/tagoio/tagorun/access-management/defining-targets",
    "/portal/en/kb/articles/186-defining-permissions":
      "/docs/tagoio/tagorun/access-management/defining-permissions",
    "/portal/en/kb/articles/19-gauge-overview":
      "/docs/tagoio/widgets/gaude-and-meters/",
    "/portal/en/kb/articles/190-user-management":
      "/docs/tagoio/tagorun/getting-started/user-management",
    "/portal/en/kb/articles/191-tagorun": "/docs/tagoio/tagorun/",
    "/portal/en/kb/articles/192-data-input-service":
      "/docs/tagoio/profiles/services/data-input-service",
    "/portal/en/kb/articles/193-data-output-service":
      "/docs/tagoio/profiles/services/data-output-service",
    "/portal/en/kb/articles/194-analysis-service":
      "/docs/tagoio/profiles/services/analysis-service",
    "/portal/en/kb/articles/195-sms-service":
      "/docs/tagoio/profiles/services/sms-service",
    "/portal/en/kb/articles/196-data-storage":
      "/docs/tagoio/profiles/services/data-records",
    "/portal/en/kb/articles/197-e-mail-service":
      "/docs/tagoio/profiles/services/e-mail-service",
    "/portal/en/kb/articles/198-profiles": "/docs/tagoio/profiles/",
    "/portal/en/kb/articles/200-add-ons-overview": "/docs/tagoio/addons/",
    "/portal/en/kb/articles/201-tagorun-branding-and-deploying-applications":
      "/docs/tagoio/tagorun/branding-and-deploying-applications",
    "/portal/en/kb/articles/202-custom-domain-whitelabel":
      "/docs/tagoio/addons/custom-domain/",
    "/portal/en/kb/articles/203-custom-mobile-app":
      "/docs/tagoio/addons/custom-mobile-app",
    "/portal/en/kb/articles/204-payment-methods":
      "/docs/tagoio/my-account/billing/payment-methods",
    "/portal/en/kb/articles/205-common-billing-issues":
      "/docs/tagoio/my-account/billing/common-billing-issues",
    "/portal/en/kb/articles/207-upgrading-plans-services":
      "/docs/tagoio/my-account/billing/upgrading-plans-services",
    "/portal/en/kb/articles/208-setup-billing":
      "/docs/tagoio/my-account/billing/setup-billing",
    "/portal/en/kb/articles/209-resetting-my-password":
      "/docs/tagoio/my-account/resetting-my-password",
    "/portal/en/kb/articles/210-deleting-your-account":
      "/docs/tagoio/my-account/deleting-your-account",
    "/portal/en/kb/articles/211-editing-accounts-details":
      "/docs/tagoio/my-account/",
    "/portal/en/kb/articles/212-parser-vs-analysis-comparison":
      "/docs/tagoio/devices/payload-parser/parser-vs-analysis-comparison",
    "/portal/en/kb/articles/213-payload-parser-context-global-variables":
      "/docs/tagoio/devices/payload-parser/context-global-variables",
    "/portal/en/kb/articles/215-creating-a-sandbox":
      "/docs/tagoio/profiles/creating-a-sandbox",
    "/portal/en/kb/articles/216-router":
      "/docs/tagoio/widgets/map-and-location/map-widget/router",
    "/portal/en/kb/articles/218-authorization":
      "/docs/tagoio/integrations/general/authorization",
    "/portal/en/kb/articles/22-table": "/docs/tagoio/widgets/tables/",
    "/portal/en/kb/articles/220-downlink-for-lorawan":
      "/docs/tagoio/integrations/networks/downlink-for-lorawan",
    "/portal/en/kb/articles/221-downlinks-using-dashboards":
      "/docs/tagoio/dashboards/downlinks-using-dashboards",
    "/portal/en/kb/articles/222-sigfox-using-advanced-data":
      "/docs/tagoio/integrations/networks/sigfox/sigfox-using-advanced-data",
    "/portal/en/kb/articles/223-notifications-for-users":
      "/docs/tagoio/tagorun/getting-started/notifications-for-users",
    "/portal/en/kb/articles/224-notifications-for-users-using-analysis":
      "/docs/tagoio/tagorun/getting-started/notifications-for-users-using-analysis",
    "/portal/en/kb/articles/225-formula":
      "/docs/tagoio/widgets/general/formula",
    "/portal/en/kb/articles/226-displaying-units":
      "/docs/tagoio/widgets/general/displaying-units",
    "/portal/en/kb/articles/228-form-fields-visibility":
      "/docs/tagoio/widgets/input-widgets/input-form/form-fields-visibility",
    "/portal/en/kb/articles/229-push-button-widget":
      "/docs/tagoio/widgets/input-widgets/push-button-widget",
    "/portal/en/kb/articles/230-keypad-widget":
      "/docs/tagoio/widgets/input-widgets/keypad-widget/",
    "/portal/en/kb/articles/232-keypad-data-manipulation":
      "/docs/tagoio/widgets/input-widgets/keypad-widget/keypad-data-manipulation",
    "/portal/en/kb/articles/233-keypad-visualization":
      "/docs/tagoio/widgets/input-widgets/keypad-widget/keypad-visualization",
    "/portal/en/kb/articles/234-creating-keypad-widgets":
      "/docs/tagoio/widgets/input-widgets/keypad-widget/creating-keypad-widgets",
    "/portal/en/kb/articles/236-abs-telemetry":
      "/docs/tagoio/tutorials/abs-telemetry",
    "/portal/en/kb/articles/238-trigger-by-variable":
      "/docs/tagoio/actions/trigger-by-variable",
    "/portal/en/kb/articles/239-trigger-unlock":
      "/docs/tagoio/actions/trigger-unlock",
    "/portal/en/kb/articles/240-trigger-by-resource":
      "/docs/tagoio/actions/trigger-by-resource",
    "/portal/en/kb/articles/241-signup-fields":
      "/docs/tagoio/tagorun/getting-started/signup-fields",
    "/portal/en/kb/articles/242-widget-header":
      "/docs/tagoio/widgets/general/widget-header",
    "/portal/en/kb/articles/243-filtered-variables":
      "/docs/tagoio/widgets/input-widgets/input-form/filtered-variables",
    "/portal/en/kb/articles/244-trigger-by-schedule":
      "/docs/tagoio/actions/trigger-by-schedule",
    "/portal/en/kb/articles/245-action-cron":
      "/docs/tagoio/actions/action-cron",
    "/portal/en/kb/articles/249-running-analysis-via-action":
      "/docs/tagoio/actions/running-analysis-via-action",
    "/portal/en/kb/articles/25-display-widget":
      "/docs/tagoio/widgets/displays/display-widget",
    "/portal/en/kb/articles/250-google-analytics":
      "/docs/tagoio/tagorun/integrations/google-analytics",
    "/portal/en/kb/articles/251-zoho-salesiq":
      "/docs/tagoio/tagorun/integrations/zoho-salesiq",
    "/portal/en/kb/articles/252-user-engagement":
      "/docs/tagoio/tagorun/getting-started/user-engagement",
    "/portal/en/kb/articles/256-markdown-guide":
      "/docs/tagoio/tutorials/markdown-guide",
    "/portal/en/kb/articles/257-gauge-data-range-format":
      "/docs/tagoio/widgets/gaude-and-meters/gauge-data-range-format",
    "/portal/en/kb/articles/26-note-widget":
      "/docs/tagoio/widgets/displays/note-widget",
    "/portal/en/kb/articles/29-analysis-overview": "/docs/tagoio/analysis/",
    "/portal/en/kb/articles/3-devices": "/docs/tagoio/devices/",
    "/portal/en/kb/articles/30-actions": "/docs/tagoio/actions/action-cron",
    "/portal/en/kb/articles/31-api-overview": "/docs/tagoio/api/api_overview",
    "/portal/en/kb/articles/32-mqtt":
      "/docs/tagoio/integrations/networks/mqtt/",
    "/portal/en/kb/articles/33-sigfox":
      "/docs/tagoio/integrations/networks/sigfox/",
    "/portal/en/kb/articles/34-sending-data":
      "/docs/tagoio/devices/sending-data",
    "/portal/en/kb/articles/35-deleting-data":
      "/docs/tagoio/devices/deleting-data",
    "/portal/en/kb/articles/36-getting-data":
      "/docs/tagoio/devices/getting-data",
    "/portal/en/kb/articles/37-managing-devices":
      "/docs/tagoio/devices/managing-devices",
    "/portal/en/kb/articles/38-middleware":
      "/docs/tagoio/integrations/general/middleware",
    "/portal/en/kb/articles/4-device-token":
      "/docs/tagoio/devices/device-token",
    "/portal/en/kb/articles/444-pdf-service-generator":
      "/docs/tagoio/tutorials/pdf-service-generator",
    "/portal/en/kb/articles/449-clock-widget":
      "/docs/tagoio/widgets/displays/clock-widget",
    "/portal/en/kb/articles/450-custom-widget":
      "/docs/tagoio/widgets/custom-widget/",
    "/portal/en/kb/articles/451-custom-widget-parameters":
      "/docs/tagoio/widgets/custom-widget/custom-widget-parameters",
    "/portal/en/kb/articles/452-trigger-by-mqtt-topic":
      "/docs/tagoio/actions/trigger-by-mqtt-topic",
    "/portal/en/kb/articles/453-live-inspector":
      "/docs/tagoio/devices/live-inspector",
    "/portal/en/kb/articles/454-blueprint-dashboard":
      "/docs/tagoio/dashboards/blueprint-dashboard",
    "/portal/en/kb/articles/455-blueprint-devices":
      "/docs/tagoio/devices/blueprint-devices-entities",
    "/portal/en/kb/articles/456-input-form-widget":
      "/docs/tagoio/widgets/input-widgets/input-form/",
    "/portal/en/kb/articles/458-dial-widget":
      "/docs/tagoio/widgets/gaude-and-meters/dial-widget",
    "/portal/en/kb/articles/459-angular-widget":
      "/docs/tagoio/widgets/gaude-and-meters/angular-widget",
    "/portal/en/kb/articles/460-solid-widget":
      "/docs/tagoio/widgets/gaude-and-meters/solid-widget",
    "/portal/en/kb/articles/461-vu-meter-widget":
      "/docs/tagoio/widgets/gaude-and-meters/vu-meter-widget",
    "/portal/en/kb/articles/464-node-js":
      "/docs/tagoio/analysis/sdk/nodejs-sdk",
    "/portal/en/kb/articles/466-connector-overview":
      "/docs/tagoio/devices/payload-parser/connector/connector-overview",
    "/portal/en/kb/articles/468-creating-a-network-integration":
      "/docs/tagoio/integrations/general/creating-a-network-integration",
    "/portal/en/kb/articles/471-serial-number-format":
      "/docs/tagoio/integrations/general/serial-number-format",
    "/portal/en/kb/articles/472-image-widget":
      "/docs/tagoio/widgets/media-widgets/image-widget",
    "/portal/en/kb/articles/473-video-widget":
      "/docs/tagoio/widgets/media-widgets/video-widget",
    "/portal/en/kb/articles/474-cylinder-widget":
      "/docs/tagoio/widgets/gaude-and-meters/cylinder-widget",
    "/portal/en/kb/articles/477-pie-widget":
      "/docs/tagoio/widgets/charts/pie-widget",
    "/portal/en/kb/articles/478-semi-pie-widget":
      "/docs/tagoio/widgets/charts/semi-pie-widget",
    "/portal/en/kb/articles/479-semi-donut-widget":
      "/docs/tagoio/widgets/charts/semi-donut-widget",
    "/portal/en/kb/articles/480-input-control-widget":
      "/docs/tagoio/widgets/input-widgets/input-control-widget",
    "/portal/en/kb/articles/482-static-table-widget":
      "/docs/tagoio/widgets/tables/static-table-widget",
    "/portal/en/kb/articles/486-heat-map-widget":
      "/docs/tagoio/widgets/map-and-location/heat-map-widget",
    "/portal/en/kb/articles/487-dictionaries":
      "/docs/tagoio/tagorun/getting-started/dictionaries",
    "/portal/en/kb/articles/489-using-dictionaries-multi-language":
      "/docs/tagoio/tagorun/dictionaries/using-dictionaries-multi-language",
    "/portal/en/kb/articles/490-image-marker-widget":
      "/docs/tagoio/widgets/map-and-location/image-marker-widget",
    "/portal/en/kb/articles/491-single-sign-on-sso":
      "/docs/tagoio/tagorun/single-sign-on-sso",
    "/portal/en/kb/articles/494-restful-api":
      "/docs/tagoio/getting-started/restful-api",
    "/portal/en/kb/articles/495-account-token":
      "/docs/tagoio/profiles/account-token",
    "/portal/en/kb/articles/496-simulator-data-stream":
      "/docs/tagoio/devices/simulator-data-stream",
    "/portal/en/kb/articles/497-import-export-for-dictionary":
      "/docs/tagoio/tagorun/dictionaries/import-export-for-dictionary",
    "/portal/en/kb/articles/5-other-concepts":
      "/docs/tagoio/devices/grouping-variables",
    "/portal/en/kb/articles/503-metadata":
      "/docs/tagoio/devices/payload-parser/metadata",
    "/portal/en/kb/articles/505-field-types-for-input-form":
      "/docs/tagoio/widgets/input-widgets/input-form/field-types-for-input-form",
    "/portal/en/kb/articles/506-dynamic-table-widget":
      "/docs/tagoio/widgets/tables/dynamic-table-widget",
    "/portal/en/kb/articles/507-line-chart-widget":
      "/docs/tagoio/widgets/charts/line-chart-widget",
    "/portal/en/kb/articles/508-area-chart-widget":
      "/docs/tagoio/widgets/charts/area-chart-widget",
    "/portal/en/kb/articles/509-horizontal-bar-widget":
      "/docs/tagoio/widgets/charts/horizontal-bar-widget",
    "/portal/en/kb/articles/510-vertical-column-widget":
      "/docs/tagoio/widgets/charts/vertical-column-widget",
    "/portal/en/kb/articles/511-multiple-axis-chart-widget":
      "/docs/tagoio/widgets/charts/multiple-charts-widget",
    "/portal/en/kb/articles/512-grain-bin-widget":
      "/docs/tagoio/widgets/gaude-and-meters/grain-bin-widget",
    "/portal/en/kb/articles/513-compose-widget":
      "/docs/tagoio/widgets/media-widgets/compose-widget",
    "/portal/en/kb/articles/517-device-emulator-functions":
      "/docs/tagoio/devices/device-emulator/device-emulator-functions",
    "/portal/en/kb/articles/518-distributing-dashboards":
      "/docs/tagoio/dashboards/distributing-dashboards",
    "/portal/en/kb/articles/52-data-retention-feature":
      "/docs/tagoio/devices/data-management/data-retention-feature",
    "/portal/en/kb/articles/526-two-factor-authentication":
      "/docs/tagoio/my-account/two-factor-authentication-2fa",
    "/portal/en/kb/articles/527-device-list-widget":
      "/docs/tagoio/widgets/tables/device-list-widget",
    "/portal/en/kb/articles/528-map-layer-gis":
      "/docs/tagoio/widgets/map-and-location/map-widget/map-layer-gis",
    "/portal/en/kb/articles/55-data-export":
      "/docs/tagoio/devices/data-management/data-export",
    "/portal/en/kb/articles/61-console-for-debug":
      "/docs/tagoio/analysis/console-for-debug",
    "/portal/en/kb/articles/63-usage-policy":
      "/docs/tagoio/profiles/services/usage-policy",
    "/portal/en/kb/articles/64-script-examples":
      "/docs/tagoio/analysis/script-examples",
    "/portal/en/kb/articles/65-environment-variables":
      "/docs/tagoio/analysis/environment-variables",
    "/portal/en/kb/articles/68-how-it-works":
      "/docs/tagoio/getting-started/how-it-works",
    "/portal/en/kb/articles/7-beagle-bone-black":
      "/docs/tagoio/tutorials/beagle-bone-black",
    "/portal/en/kb/articles/8-raspberry-pi":
      "/docs/tagoio/tutorials/raspberry-pi",
    "/portal/en/kb/articles/83-connecting-zen15-power-using-smartthings-hub":
      "/docs/tagoio/tutorials/connecting-zen15-power-using-smartthings-hub",
    "/portal/en/kb/articles/9-mqtt-with-sensor-tag":
      "/docs/tagoio/tutorials/mqtt-with-sensor-tag",
    "/portal/en/kb/articles/90-icons-widget":
      "/docs/tagoio/widgets/displays/icons-widget",
    "/portal/en/kb/articles/95-device-emulator":
      "/docs/tagoio/devices/device-emulator/",
    "/portal/en/kb/articles/allocating-resources-to-profiles":
      "/docs/tagoio/my-account/billing/allocating-services-to-profiles",
    "/portal/en/kb/articles/audit-log": "/docs/tagoio/profiles/audit-log",
    "/portal/en/kb/articles/billing": "/docs/tagoio/my-account/billing/",
    "/portal/en/kb/articles/cache-system":
      "/docs/tagoio/widgets/general/widget-cache-system",
    "/portal/en/kb/articles/chunk-management":
      "/docs/tagoio/devices/data-management/chunk-management",
    "/portal/en/kb/articles/configuration-parameters-for-devices":
      "/docs/tagoio/devices/configuration-parameters-for-devices",
    "/portal/en/kb/articles/connecting-your-mqtt-broker-to-tagoio":
      "/docs/tagoio/integrations/networks/mqtt/connecting-your-mqtt-broker-to-tagoio",
    "/portal/en/kb/articles/control-tower": "/docs/tagoio/addons/control-tower",
    "/portal/en/kb/articles/custom-domain-configuration":
      "/docs/tagoio/addons/custom-domain/custom-domain-configuration",
    "/portal/en/kb/articles/custom-settings":
      "/docs/tagoio/tagorun/getting-started/custom-settings",
    "/portal/en/kb/articles/custom-widget-tutorial-in-progress":
      "/docs/tagoio/widgets/custom-widget/echarts-custom-widget-tutorial-",
    "/portal/en/kb/articles/dashboard-period-preset":
      "/docs/tagoio/dashboards/dashboard-global-time-filter-and-period-presets",
    "/portal/en/kb/articles/data-analytics":
      "/docs/tagoio/widgets/general/data-analytics",
    "/portal/en/kb/articles/data-output-for-dashboards":
      "/docs/tagoio/dashboards/data-output-for-dashboards",
    "/portal/en/kb/articles/device-data":
      "/docs/tagoio/devices/data-management/device-data-management",
    "/portal/en/kb/articles/downgrading-plans-services":
      "/docs/tagoio/my-account/billing/downgrading-plans-services",
    "/portal/en/kb/articles/end-user-agreements":
      "/docs/tagoio/tagorun/getting-started/end-user-agreements",
    "/portal/en/kb/articles/end-users-service":
      "/docs/tagoio/profiles/services/end-users-service",
    "/portal/en/kb/articles/entities": "/docs/tagoio/getting-started/entities",
    "/portal/en/kb/articles/entity-table":
      "/docs/tagoio/widgets/tables/entity-table-widget",
    "/portal/en/kb/articles/files-service":
      "/docs/tagoio/profiles/services/file-storage-service",
    "/portal/en/kb/articles/frame-settings":
      "/docs/tagoio/widgets/general/frame-settings",
    "/portal/en/kb/articles/lorawan-publication-of-environmental-measurements-with-a-lora-e5-module":
      "/docs/tagoio/tutorials/lorawan-publication-of-environmental-measurements-with-a-lora-e5-module",
    "/portal/en/kb/articles/managing-your-account-with-the-tagoio-mobile-app":
      "/docs/tagoio/my-account/managing-your-account-with-the-tagoio-mobile-app",
    "/portal/en/kb/articles/mqtt-retain":
      "/docs/tagoio/integrations/networks/mqtt/mqtt-retain-on-tagoio-broker",
    "/portal/en/kb/articles/multiple-axes-in-chart-widgets":
      "/docs/tagoio/widgets/charts/multiple-axes-in-chart-widgets",
    "/portal/en/kb/articles/navigation-bar":
      "/docs/tagoio/tagorun/getting-started/navigation-bar",
    "/portal/en/kb/articles/notification-service":
      "/docs/tagoio/profiles/services/notification-service",
    "/portal/en/kb/articles/payload-parser-timeutils-library":
      "/docs/tagoio/devices/payload-parser/payload-parser-timeutils-library",
    "/portal/en/kb/articles/payload-parser-troubleshooting":
      "/docs/tagoio/devices/payload-parser/payload-parser-troubleshooting",
    "/portal/en/kb/articles/publishing-updating-and-accessing-decoders":
      "/docs/tagoio/devices/payload-parser/connector/publishing-updating-and-accessing-decoders",
    "/portal/en/kb/articles/python-sdk": "/docs/tagoio/analysis/sdk/python-sdk",
    "/portal/en/kb/articles/rate-limits":
      "/docs/tagoio/profiles/services/rate-limits-hard-limits",
    "/portal/en/kb/articles/reference-lines":
      "/docs/tagoio/widgets/general/reference-lines",
    "/portal/en/kb/articles/refund-policy":
      "/docs/tagoio/my-account/billing/refund-policy",
    "/portal/en/kb/articles/resource-limits":
      "/docs/tagoio/my-account/billing/resource-limits",
    "/portal/en/kb/articles/restoring-your-dashboard-to-a-previous-version":
      "/docs/tagoio/dashboards/restoring-your-dashboard-to-a-previous-version",
    "/portal/en/kb/articles/run-themes":
      "/docs/tagoio/tagorun/getting-started/run-theme",
    "/portal/en/kb/articles/running-analysis-as-external-using-deno":
      "/docs/tagoio/analysis/running-analysis-as-external-using-deno",
    "/portal/en/kb/articles/secrets": "/docs/tagoio/getting-started/secrets",
    "/portal/en/kb/articles/security-and-compliance":
      "/docs/tagoio/security/security-and-compliance",
    "/portal/en/kb/articles/security-and-protection-for-run-users":
      "/docs/tagoio/tagorun/getting-started/security-and-protection-for-run-users",
    "/portal/en/kb/articles/sharing-connectors-networks":
      "/docs/tagoio/devices/payload-parser/connector/sharing-connectors-networks",
    "/portal/en/kb/articles/sidebar":
      "/docs/tagoio/tagorun/getting-started/sidebar",
    "/portal/en/kb/articles/tago-deploy":
      "/docs/tagodeploy/tago-deploy-enterprise-iot-platform-infrastructure",
    "/portal/en/kb/articles/tagocore": "/docs/tagocore/",
    "/portal/en/kb/articles/tagocore-cluster": "/docs/tagocore/",
    "/portal/en/kb/articles/tagocore-open-source-documentation":
      "/docs/tagocore/",
    "/portal/en/kb/articles/tagoio-mcp-ai-powered-iot-data-integration":
      "/docs/tagoio/getting-started/tagoio-mcp-ai-powered-iot-data-integration",
    "/portal/en/kb/articles/tagoio-mqtt-relay":
      "/docs/tagoio/integrations/networks/mqtt/connecting-your-mqtt-broker-to-tagoio",
    "/portal/en/kb/articles/tags": "/docs/tagoio/getting-started/tags-system",
    "/portal/en/kb/articles/ticket-severity-options":
      "/docs/tagoio/support/ticket-severity-options",
    "/portal/en/kb/articles/trigger-by-geofence":
      "/docs/tagoio/actions/trigger-by-geofence",
    "/portal/en/kb/articles/trigger-by-usage-alert":
      "/docs/tagoio/actions/trigger-by-usage-alert",
    "/portal/en/kb/articles/user-list-widget":
      "/docs/tagoio/widgets/tables/user-list-widget",
  };

  // Check for direct URL mapping
  if (urlMappings[uri]) {
    return createRedirect(`https://docs.tago.io${urlMappings[uri]}`);
  }

  // Generic fallback: anything under /portal/en/kb → docs home
  if (uri.indexOf("/portal/en/kb") === 0) {
    return {
      status: "301",
      statusDescription: "Moved Permanently",
      headers: {
        location: [{ key: "Location", value: "https://docs.tago.io" }],
      },
    };
  }

  // Default fallback: send any other help.tago.io path to support.tago.io, preserving path and query
  const querystring = request.querystring;
  let query = "";
  if (querystring) {
    query = `?${querystring}`;
  }

  return {
    status: "301",
    statusDescription: "Moved Permanently",
    headers: {
      location: [
        { key: "Location", value: `https://support.tago.io${uri}${query}` },
      ],
    },
  };
};
