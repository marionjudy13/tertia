export default {
  name: "navMenu",
  title: "Nav menu",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "navItems",
      title: "Nav items",
      type: "array",
      of: [
        {
          name: "navItem",
          title: "Nav Item",
          type: "object",
          fields: [
            {
              name: "copy",
              title: "Copy",
              type: "string",
            },
            {
              name: "path",
              title: "Path",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};
