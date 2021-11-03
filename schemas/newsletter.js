import { v4 as uuidv4 } from "uuid";
const currentDate = new Date().toISOString().split("T")[0];

export default {
  name: "newsletter",
  title: "Newsletter",
  type: "document",
  liveEdit: true,
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
      hidden: true,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description:
        'Needed to enable email preview, click "Generate" if this is empty',
      options: {
        maxLength: 500,
        source: (doc) => {
          const uid = uuidv4();
          return `${doc.postDate || currentDate}-${uid}`;
        },
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Include header?",
      name: "includeHeader",
      type: "boolean",
      initialValue: true,
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "imageBlock",
          name: "imageBlock",
          title: "Image",
        },
        {
          type: "button",
          name: "button",
          title: "Button",
        },
        {
          type: "titleEmail",
          name: "titleEmail",
          title: "Title",
        },
        {
          type: "textEmail",
          name: "paragraphEmail",
          title: "Paragraph",
        },
        {
          type: "twoColumn",
          name: "twoColumn",
          title: "Two Column Image + Image",
        },
        {
          type: "twoColumnImageText",
          name: "twoColumnImageText",
          title: "Two Column Image + Text",
        },
        {
          type: "space",
          name: "space",
          title: "Space",
        },
        {
          type: "line",
          name: "line",
          title: "Line",
        },
      ],
    },
  ],
  initialValue: () => ({
    postDate: currentDate,
  }),
  preview: {
    select: {
      title: "title",
      postDate: "postDate",
    },
    prepare({ title, postDate }) {
      const emailTitle = title || postDate;
      const date = postDate ? `${postDate}` : "🔴 No date defined";
      return {
        title: emailTitle,
        subtitle: date,
      };
    },
  },
};
