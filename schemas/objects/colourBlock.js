import toPlainText from "../../lib/toPlainText";

export default {
  type: "object",
  name: "colourBlock",
  title: "Colour Block",
  fields: [
    {
      title: "Caption",
      name: "caption",
      type: "normal",
    },
  ],
  preview: {
    select: {
      caption: "caption",
    },
    prepare({ caption }) {
      const title = caption ? toPlainText(caption) : "No caption defined";
      return {
        title,
      };
    },
  },
};
