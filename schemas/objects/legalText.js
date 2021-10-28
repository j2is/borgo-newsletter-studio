import toPlainText from "../../lib/toPlainText";

export default {
  name: "legalText",
  type: "object",
  title: "Content",
  fields: [
    {
      title: "Body",
      name: "body",
      type: "headingTwoThreeNormalSmall",
    },
  ],
  preview: {
    select: {
      body: "body",
    },
    prepare({ body }) {
      const title = body ? toPlainText(body) : "Missing body";
      return {
        title,
      };
    },
  },
};
