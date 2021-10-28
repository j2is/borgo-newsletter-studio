export default {
  type: "object",
  name: "vCard",
  title: "V Card",
  fields: [
    {
      title: "First Name",
      name: "firstName",
      type: "string",
    },
    {
      title: "Middle Name",
      name: "middleName",
      type: "string",
    },
    {
      title: "Last Name",
      name: "lastName",
      type: "string",
    },
    {
      title: "Organisation",
      name: "organisation",
      type: "string",
    },
    {
      title: "Name Prefix",
      name: "namePrefix",
      type: "string",
    },
    {
      title: "Name Suffix",
      name: "nameSuffix",
      type: "string",
    },
    {
      title: "Role",
      name: "role",
      type: "string",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
    },
    {
      title: "Work Email",
      name: "workEmail",
      type: "string",
    },
    {
      title: "Url",
      name: "url",
      type: "string",
    },
    {
      title: "Work Phone",
      name: "workPhone",
      type: "string",
    },
    {
      title: "Work Fax",
      name: "workFax",
      type: "string",
    },
    {
      title: "Address Label",
      name: "addressLabel",
      type: "string",
    },
    {
      title: "Address Street",
      name: "addressStreet",
      type: "string",
    },
    {
      title: "Address Extended",
      name: "addressExtended",
      type: "string",
    },
    {
      title: "Address City",
      name: "addressCity",
      type: "string",
    },
    {
      title: "Address Region",
      name: "addressRegion",
      type: "string",
    },
    {
      title: "Address Zip",
      name: "addressZip",
      type: "string",
    },
    {
      title: "Address Country",
      name: "addressCountry",
      type: "string",
    },
    {
      title: "Note",
      name: "note",
      type: "string",
    },
  ],
  preview: {
    select: {
      organisation: "organisation",
    },
    prepare({ organisation }) {
      return {
        title: organisation || "Please set a company name",
      };
    },
  },
};
