import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apitdeploysidebar: [
    {
      type: "category",
      className: "api-category",
      label: "API Overview",
      collapsible: false,
      items: [
        {
          type: "doc",
          id: "api-tdeploy/sidebar/tagoio-deploy-api-intro",
          label: "Introduction",
        },
      ],
    },
    {
      type: "category",
      className: "services-category",
      label: "Services",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api-tdeploy/list-project-services",
          label: "List Project Services",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      className: "mqtt-category",
      label: "MQTT",
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "api-tdeploy/create-mqtt-client",
          label: "Create MQTT Clients",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api-tdeploy/list-mqtt-clients",
          label: "List MQTT Clients",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api-tdeploy/update-mqtt-client",
          label: "Update MQTT Client",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api-tdeploy/delete-mqtt-client",
          label: "Delete MQTT Client",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apitdeploysidebar;
