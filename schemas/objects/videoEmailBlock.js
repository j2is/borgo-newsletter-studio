import toPlainText from "../../lib/toPlainText";

export default {
  type: "object",
  name: "videoEmailBlock",
  title: "Video Block",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
        layout: "grid",
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          relativeOnly: false,
        }),
    },
    {
      title: "Caption",
      name: "caption",
      type: "normal",
    },
  ],
  preview: {
    select: {
      media: "image",
      caption: "caption",
      url: "url",
    },
    prepare({ caption, media, url }) {
      const title = caption ? toPlainText(caption) : "No caption defined";
      const subtitle = url || null;
      return {
        title,
        subtitle,
        media,
      };
    },
  },
};
