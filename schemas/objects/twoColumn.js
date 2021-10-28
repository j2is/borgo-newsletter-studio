import toPlainText from "../../lib/toPlainText";
export default {
  type: "object",
  name: "twoColumn",
  title: "Two Column",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Link",
      name: "link",
      type: "url",
    },
    {
      title: "Image Two",
      name: "imageTwo",
      type: "image",
    },
    {
      title: "Title Two",
      name: "titleTwo",
      type: "string",
    },
    {
      title: "Link",
      name: "linkTwo",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      link: "link",
    },
    prepare({ title, paragraph, link }) {
      return {
        title,
      };
    },
  },
};
