export default {
  type: "object",
  name: "titleEmail",
  title: "Title",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "text",
    },
  ],
  preview: {
    select: {
      text: "text",
    },
    prepare({ text }) {
      const title = text ? text : "No title defined";
      return {
        title,
      };
    },
  },
};
