import S from "@sanity/desk-tool/structure-builder";
import React from "react";
import { MdWeb, MdSettings, MdWhatshot, MdLooks } from "react-icons/md";

import EmailPreview from "../components/previews/email/EmailPreview";

export const getDefaultDocumentNode = ({ schemaType }) => {
  // Conditionally return a different configuration based on the schema type
  if (schemaType === "newsletter") {
    return S.document().views([
      S.view.form(),
      S.view.component(EmailPreview).title("Preview"),
    ]);
  }

  return S.document().views([S.view.form()]);
};

export default S.defaults();
