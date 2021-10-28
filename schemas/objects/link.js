import documentTypes from "./documentTypes";

export default {
  type: "object",
  name: "link",
  title: "Link",
  fields: [
    {
      name: "openInNewTab",
      type: "boolean",
      title: "Open In New Tab",
    },
    {
      title: "Title",
      name: "text",
      type: "string",
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
  preview: {
    select: {
      openInNewTab: "openInNewTab",
      externalLink: "externalLink",
      internalLink: "internalLink",
    },
    prepare({ openInNewTab, externalLink, internalLink }) {
      const title = externalLink || internalLink || "No link defined";
      const subtitle = openInNewTab ? "New Window" : "";
      return {
        title,
        subtitle,
      };
    },
  },
};
