export default {
  name: "newsletter",
  title: "Newsletter",
  type: "document",
  fields: [
    {
      title: "Title",
      type: "string",
      name: "title",
    },
    {
      title: "Post Date",
      name: "postDate",
      type: "date",
      dateFormat: "YYYY-MM-DD",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        maxLength: 500,
        source: (doc) => `${doc.postDate || ""}`,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "image",
          name: "singleImage",
          title: "Image",
        },
        {
          type: "textEmail",
          name: "paragraphEmail",
          title: "Paragraph",
        },
        {
          type: "twoColumn",
          name: "twoColumn",
          title: "Two Column",
        },
      ],
    },
  ],
  initialValue: () => ({}),
  preview: {
    select: {
      postDate: "postDate",
    },
    prepare({ postDate }) {
      const date = postDate ? `Email ${postDate}` : "🔴 No date defined";
      return {
        title: date,
      };
    },
  },
};
