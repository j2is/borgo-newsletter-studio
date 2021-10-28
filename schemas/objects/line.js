export default {
  type: "object",
  name: "line",
  title: "Line",
  fields: [
    {
      title: "Size",
      name: "size",
      type: "string",
      initialValue: "oneSize",
      options: {
        list: [{ title: "One Size", value: "oneSize" }], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
    },
  ],
  preview: {
    prepare() {
      return {
        title: `––––––––––––––––`,
      };
    },
  },
};
