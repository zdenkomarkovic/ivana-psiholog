import { client } from "@/lib/sanity";
import GostovanjaSection, { GostovanjeData } from "./GostovanjaSection";

async function getGostovanja(): Promise<GostovanjeData[]> {
  const query = `*[_type == "gostovanje"] | order(redosled asc) {
    naziv,
    youtubeUrl,
    redosled
  }`;
  return client.fetch(query);
}

export default async function GostovanjaSectionServer() {
  const gostovanja = await getGostovanja();
  return <GostovanjaSection gostovanja={gostovanja} />;
}
