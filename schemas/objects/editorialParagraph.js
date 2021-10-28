import toPlainText from "../../lib/toPlainText";

export default {
  type: "object",
  name: "editorialParagraph",
  title: "Editorial Paragraph",
  fields: [
    {
      title: "Text",
      name: "text",
      type: "headingTwoThreeNormalSmall",
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
