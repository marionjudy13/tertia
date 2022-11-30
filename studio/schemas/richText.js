export default {
  name: "richText",
  title: "Rich text",
  type: "object",
  fields: [
    {
      name: "copy",
      title: "Copy",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};
