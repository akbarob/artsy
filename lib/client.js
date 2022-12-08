import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: "kt3ppfqi",
  dataset: "production",
  apiVersion: "2022-12-10",
  useCdn: true,
  token: process.env.NEXT_PULIC_SANITY_TOKEN,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
