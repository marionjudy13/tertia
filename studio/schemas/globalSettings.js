export default {
  name: "globalSettings",
  title: "Global settings",
  type: "document",
  fields: [
    {
      name: "siteTitle",
      title: "Site title",
      type: "string",
    },
    {
      name: "siteDescription",
      title: "Site description",
      type: "string",
    },
    {
      name: "mainLogo",
      title: "Main logo",
      type: "image",
    },
    {
      name: "altLogo",
      title: "Alternate logo",
      type: "image",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          name: "url",
          title: "URL",
          type: "string",
        },
      ],
    },
  ],
};
