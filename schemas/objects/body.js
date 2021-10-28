import toPlainText from "../../lib/toPlainText";

export default {
  type: "object",
  name: "body",
  title: "Body",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "normal",
    },
  ],
  preview: {
    select: {
      text: "text",
    },
    prepare({ text }) {
      const title = text ? toPlainText(text) : "No text defined";
      return {
        title,
      };
    },
  },
};
