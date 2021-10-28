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
      initialValue: "https://borgodenor.com",
      validation: (Rule) => [
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: false,
        }),
        Rule.required(),
      ],
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
