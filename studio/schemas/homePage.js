export default {
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "heroBanner",
      title: "Hero Banner",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
        },
      ],
    },
    {
      name: "componentSelector",
      title: "Component selector",
      type: "array",
      of: [{ type: "imageBanner" }, { type: "richText" }],
    },
  ],
};
