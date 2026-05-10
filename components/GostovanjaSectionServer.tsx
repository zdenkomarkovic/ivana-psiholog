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
  let gostovanja: GostovanjeData[] = [];
  try {
    gostovanja = await getGostovanja();
  } catch (e) {
    console.error('Failed to fetch gostovanja:', e);
  }
  if (gostovanja.length === 0) return null;
  return <GostovanjaSection gostovanja={gostovanja} />;
}
