const secret = "secret";

const projectUrl =
  process.env.NODE_ENV === "production"
    ? process.env.PRODUCTION_URL
    : "http://localhost:3000";

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview/preview?secret=${secret}&slug=${document?.slug?.current}&_type=${document?._type}`;
}
