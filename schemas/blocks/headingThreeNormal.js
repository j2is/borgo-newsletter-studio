import documentTypes from "../objects/documentTypes";

export default {
  title: "Content",
  name: "headingThreeNormal",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Heading 3", value: "h3" },
        { title: "Normal", value: "normal" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [],
        annotations: [
          {
            title: "Link",
            name: "link",
            type: "object",
            fields: [
              {
                name: "openInNewTab",
                type: "boolean",
                title: "Open In New Tab",
              },
              {
                name: "externalLink",
                type: "url",
                title: "External Link",
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                    allowRelative: false,
                  }),
              },
              {
                name: "internalLink",
                type: "reference",
                to: documentTypes,
              },
            ],
          },
        ],
      },
    },
  ],
};
