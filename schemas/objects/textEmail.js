export default {
  type: "object",
  name: "textEmail",
  title: "Paragraph",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "text",
    },
    {
      title: "Left-align",
      name: "leftAlign",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      text: "text",
    },
    prepare({ text }) {
      const title = text ? text : "No text defined";
      return {
        title,
      };
    },
  },
};
