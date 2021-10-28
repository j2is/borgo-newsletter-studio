export default {
  name: "header",
  title: "Header",
  type: "document",
  __experimental_actions: [/*'"create" */ "update", /*'delete',*/ "publish"],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      placeholder: "We ship worldwide with duties and tax included",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Link",
      name: "link",
      type: "url",
      initialValue: "https://borgodenor.com/pages/faqs",
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
      title: "title",
    },
    prepare({ title }) {
      return {
        title,
      };
    },
  },
};
