import toPlainText from "../../lib/toPlainText";
export default {
  type: "object",
  name: "paragraph",
  title: "Paragraph",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "headingThreeNormal",
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
