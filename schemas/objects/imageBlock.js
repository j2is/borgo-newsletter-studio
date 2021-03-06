export default {
  type: "object",
  name: "imageBlock",
  title: "Image Block",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
        layout: "grid",
      },
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
      media: "image",
    },
    prepare({ media }) {
      return {
        title: "-",
        media,
      };
    },
  },
};
