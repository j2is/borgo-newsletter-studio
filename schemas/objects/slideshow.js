export default {
  type: "object",
  name: "slideshow",
  title: "Slideshow",
  fields: [
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          title: "Body",
          name: "body",
          type: "body",
        },
      ],
      validation: (Rule) => Rule.max(8),
    },
  ],
  preview: {
    select: {
      content: "content",
    },
    prepare({ content }) {
      const title = content
        ? `${content.length} slide${content.length > 1 ? "s" : ""}`
        : "No slides";
      return {
        title,
      };
    },
  },
};
