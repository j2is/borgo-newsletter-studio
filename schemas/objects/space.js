export default {
  type: "object",
  name: "space",
  title: "Space",
  fields: [
    {
      title: "Size",
      name: "size",
      type: "string",
      initialValue: "small",
      options: {
        list: [
          { title: "Large", value: "large" },
          { title: "Medium", value: "medium" },
          { title: "Small", value: "small" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
    },
  ],
  preview: {
    select: {
      size: "size",
    },
    prepare({ size }) {
      return {
        title: `Space: ${size}`,
      };
    },
  },
};
