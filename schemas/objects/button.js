export default {
  type: "object",
  name: "button",
  title: "Button",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      placeholder: "Shop now",
      initialValue: "Shop now",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "link",
      type: "url",
      title: "Link",
      initialValue: "https://borgodenor.com/collections/shop",
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
      link: "link",
    },
    prepare({ title, link }) {
      return {
        title,
        subtitle: link,
      };
    },
  },
};
