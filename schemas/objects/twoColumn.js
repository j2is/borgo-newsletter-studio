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
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Title",
      name: "title",
      type: "string",
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
      title: "Image Two",
      name: "imageTwo",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Title Two",
      name: "titleTwo",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Link",
      name: "linkTwo",
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
  ],
  preview: {
    select: {
      title: "title",
      titleTwo: "titleTwo",
      media: "image",
    },
    prepare({ title, titleTwo, media }) {
      const prettyTitle = `${title || "Missing Product Title"} / ${
        titleTwo || "Missing Product Two Title"
      }`;
      return {
        title: prettyTitle,
        media,
      };
    },
  },
};
