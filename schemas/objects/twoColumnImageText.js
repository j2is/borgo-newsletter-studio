import toPlainText from "../../lib/toPlainText";
export default {
  type: "object",
  name: "twoColumnImageText",
  title: "Two Column Image + Text",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Link",
      name: "link",
      type: "url",
      initialValue: "https://borgodenor.com/collections/shop",
      validation: (Rule) => [
        Rule.uri({
          scheme: ["http", "https", "mailto", "tel"],
          allowRelative: false,
        }),
        Rule.required(),
      ],
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      link: "link",
      description: "description",
      media: "image",
    },
    prepare({ title, description, link, media }) {
      return {
        title: title || "-",
        subtitle: description,
        media,
      };
    },
  },
};
