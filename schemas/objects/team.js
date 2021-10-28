import toPlainText from "../../lib/toPlainText";
export default {
  type: "object",
  name: "team",
  title: "Team",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "headingTwo",
    },
    {
      title: "Paragraph",
      name: "paragraph",
      type: "normal",
    },
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
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "credits",
          type: "string",
          title: "Credits",
        },
      ],
    },
    {
      title: "People",
      name: "people",
      type: "array",
      of: [
        {
          name: "person",
          type: "reference",
          to: [{ type: "people" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      paragraph: "paragraph",
      link: "link",
    },
    prepare({ title, paragraph, link }) {
      const subtitle = paragraph ? toPlainText(paragraph) : "";
      return {
        title: title ? toPlainText(title) : null,
        subtitle,
      };
    },
  },
};
