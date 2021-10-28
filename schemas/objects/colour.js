export default {
  type: "object",
  name: "colour",
  title: "Colour",
  fields: [
    {
      title: "Base",
      name: "base",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      title: "Complimentary Colour 1",
      name: "complimentaryColour1",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      title: "Complimentary Colour 2",
      name: "complimentaryColour2",
      type: "color",
      options: {
        disableAlpha: true,
      },
    },
    {
      title: "Trigger URL",
      name: "triggerURL",
      type: "url",
      initialValue: "/",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          relativeOnly: true,
        }),
    },
  ],
  preview: {
    select: {
      base: "base",
      complimentaryColour1: "complimentaryColour1",
      complimentaryColour2: "complimentaryColour2",
      triggerURL: "triggerURL",
    },
    prepare({ base, complimentaryColour1, complimentaryColour2, triggerURL }) {
      const render = (obj) => {
        if (!obj) {
          return "";
        }
        return `${obj.hex}`;
      };
      const title =
        base && complimentaryColour1 && complimentaryColour2
          ? `${render(base)}, ${render(complimentaryColour1)}, ${render(
              complimentaryColour2
            )}`
          : "Missing colour information";
      return {
        title,
        subtitle: triggerURL || "Missing URL",
      };
    },
  },
};
