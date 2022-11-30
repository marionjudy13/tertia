export default {
  name: "aboutPage",
  title: "About Page",
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
    { name: "richText", title: "Rich Text", type: "richText" },
  ],
};
