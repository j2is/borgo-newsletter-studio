import toPlainText from "../../lib/toPlainText";

export default {
  type: "object",
  name: "quote",
  title: "Quote",
  fields: [
    {
      title: "Quote",
      name: "quote",
      type: "blockquote",
    },
    {
      title: "Attribution",
      name: "attribution",
      type: "string",
    },
  ],
  preview: {
    select: {
      quote: "quote",
      attribution: "attribution",
    },
    prepare({ quote, attribution }) {
      const title = quote ? `«${toPlainText(quote)}»` : "No quote defined";
      const subtitle = attribution ? attribution : "No attribution defined";
      return {
        title,
        subtitle,
      };
    },
  },
};
