import toPlainText from "../../lib/toPlainText";

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
      title: "Caption",
      name: "caption",
      type: "normal",
    },
  ],
  preview: {
    select: {
      media: "image",
      caption: "caption",
    },
    prepare({ caption, media }) {
      const title = caption ? toPlainText(caption) : "No caption defined";
      return {
        title,
        media,
      };
    },
  },
};
