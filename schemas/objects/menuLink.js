export default {
  type: "object",
  name: "menuLink",
  title: "Menu Link",
  fields: [
    {
      title: "Link Title",
      name: "linkTitle",
      type: "string",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          relativeOnly: true,
        }),
    },
  ],
  preview: {
    select: {
      title: "linkTitle",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
