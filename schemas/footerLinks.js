export default {
  name: "footerLinks",
  title: "Footer Links",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "menuLink",
          name: "menuLink",
          title: "Footer Link",
        },
      ],
    },
  ],
  preview: {
    select: {
      content: "content",
    },
    prepare({ content }) {
      const title = `${content.length} Link${
        content.length > 1 || content.length === 0 ? "s" : ""
      }`;
      return {
        title,
      };
    },
  },
};
