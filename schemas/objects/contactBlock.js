import toPlainText from "../../lib/toPlainText";

export default {
  type: "object",
  name: "contactBlock",
  title: "Contact Block",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "headingTwo",
    },
    {
      title: "Body",
      name: "body",
      type: "headingTwoThreeNormalSmall",
    },
  ],
  preview: {
    select: {
      title: "title",
      body: "body",
    },
    prepare({ title, body }) {
      const subtitle = body ? toPlainText(body) : "";
      return {
        title: title ? toPlainText(title) : null,
        subtitle,
      };
    },
  },
};
