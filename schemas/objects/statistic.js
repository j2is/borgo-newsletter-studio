export default {
  type: "object",
  name: "statistic",
  title: "Statistic",
  fields: [
    {
      title: "Pre Label",
      name: "preLabel",
      type: "string",
    },
    {
      title: "Statistic",
      name: "statistic",
      type: "string",
    },
    {
      title: "Post Label",
      name: "postLabel",
      type: "string",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
  ],
  preview: {
    select: {
      preLabel: "preLabel",
      statistic: "statistic",
      postLabel: "postLabel",
      subtitle: "subtitle",
    },
    prepare({ preLabel, statistic, postLabel, subtitle }) {
      const arr = [preLabel, statistic, postLabel];
      const title = arr.slice(0, arr.length - 1).join(" ");
      return {
        title,
        subtitle,
      };
    },
  },
};
