import React from "react";
import styles from "./IframePreview.css";

export default function EmailPreview(props) {
  const { displayed } = props.document;
  if (!displayed?.slug?.current) {
    return <div>The email needs a slug before it can be previewed.</div>;
  }
  const url =
    process.env.NODE_ENV === "production"
      ? `https://borgo-newsletter.vercel.app/email/${displayed?.slug?.current}?preview=true`
      : `http://localhost:3000/email/${displayed?.slug?.current}?preview=true`;

  return (
    <div className={styles.componentWrapper}>
      <div className={styles.iframeContainer}>
        <iframe src={url} frameBorder={"0"} />
      </div>
    </div>
  );
}
