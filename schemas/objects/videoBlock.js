import toPlainText from "../../lib/toPlainText";

export default {
  type: "object",
  name: "videoBlock",
  title: "Video Block",
  fields: [
    {
      title: "Vimeo Link",
      name: "vimeoLink",
      type: "url",
      initialValue: "https://player.vimeo.com/link-to-hd-vimeo-file.mp4",
      validation: (Rule) =>
        Rule.regex(/player/, {
          name: "vimeo player", // Error message is "Does not match vimeo player-pattern"
          invert: false, // Boolean to allow any value that does NOT match pattern
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
      vimeoLink: "vimeoLink",
      caption: "caption",
    },
    prepare({ caption, vimeoLink }) {
      const title = vimeoLink ? "Video" : "Needs vimeo link";
      return {
        title,
        subtitle: caption ? toPlainText(caption) : "Needs caption",
      };
    },
  },
};
