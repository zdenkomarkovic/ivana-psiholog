# Sanity Integracija: Gostovanja i Saradnici

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prebaciti hardkodovane nizove gostovanja i saradnici iz React komponenti u Sanity CMS, sa zasebnim document tipovima za svaki entitet.

**Architecture:** Kreiramo dva nova Sanity document tipa (`gostovanje`, `saradnik`). `GostovanjaSection` ostaje `"use client"` ali prima podatke kao props od novog async server wrappera `GostovanjaSectionServer`. `SaradniciSection` postaje async server komponenta koja direktno povlači podatke. YouTube URL se parsira u frontendu da se izvuku `videoId` i `startTime`.

**Tech Stack:** Next.js App Router (server components), Sanity (`defineType`, `defineField`), `@sanity/image-url`, GROQ

---

## File Map

| Fajl | Akcija | Opis |
|------|--------|------|
| `schemas/gostovanje.ts` | Kreirati | Sanity schema za gostovanje |
| `schemas/saradnik.ts` | Kreirati | Sanity schema za saradnik |
| `schemas/index.ts` | Izmeniti | Registrovati obe nove šeme |
| `components/GostovanjaSection.tsx` | Izmeniti | Primiti `gostovanja` kao props umesto hardkodovanog niza |
| `components/GostovanjaSectionServer.tsx` | Kreirati | Async server wrapper koji povlači podatke i prosleđuje ih |
| `components/SaradniciSection.tsx` | Izmeniti | Postati async server komponenta, povlači iz Sanity |
| `app/page.tsx` | Izmeniti | Koristiti `GostovanjaSectionServer` umesto `GostovanjaSection` |

---

### Task 1: Kreirati `schemas/gostovanje.ts`

**Files:**
- Create: `schemas/gostovanje.ts`

- [ ] **Korak 1: Kreirati fajl šeme**

```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'gostovanje',
  title: 'Gostovanje',
  type: 'document',
  fields: [
    defineField({
      name: 'naziv',
      title: 'Naziv',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      description: 'Nalepite pun YouTube link, npr. https://www.youtube.com/watch?v=ABC&t=120s',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'redosled',
      title: 'Redosled',
      type: 'number',
      description: 'Manji broj = prikazuje se prvi',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
  ],
  preview: {
    select: {
      title: 'naziv',
      subtitle: 'redosled',
    },
    prepare({ title, subtitle }) {
      return { title, subtitle: `Redosled: ${subtitle}` }
    },
  },
})
```

- [ ] **Korak 2: Commit**

```bash
git add schemas/gostovanje.ts
git commit -m "feat: add gostovanje Sanity schema"
```

---

### Task 2: Kreirati `schemas/saradnik.ts`

**Files:**
- Create: `schemas/saradnik.ts`

- [ ] **Korak 1: Kreirati fajl šeme**

```typescript
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'saradnik',
  title: 'Saradnik',
  type: 'document',
  fields: [
    defineField({
      name: 'naziv',
      title: 'Naziv',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Link na sajt',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: false },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'redosled',
      title: 'Redosled',
      type: 'number',
      description: 'Manji broj = prikazuje se prvi',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
  ],
  preview: {
    select: {
      title: 'naziv',
      media: 'logo',
      subtitle: 'redosled',
    },
    prepare({ title, media, subtitle }) {
      return { title, media, subtitle: `Redosled: ${subtitle}` }
    },
  },
})
```

- [ ] **Korak 2: Commit**

```bash
git add schemas/saradnik.ts
git commit -m "feat: add saradnik Sanity schema"
```

---

### Task 3: Registrovati šeme u `schemas/index.ts`

**Files:**
- Modify: `schemas/index.ts`

- [ ] **Korak 1: Dodati obe šeme**

Zameni sadržaj `schemas/index.ts` sa:

```typescript
import blog from './blog'
import gostovanje from './gostovanje'
import saradnik from './saradnik'

export const schemaTypes = [blog, gostovanje, saradnik]
```

- [ ] **Korak 2: Commit**

```bash
git add schemas/index.ts
git commit -m "feat: register gostovanje and saradnik schemas"
```

---

### Task 4: Refaktorisati `GostovanjaSection` da prima props

**Files:**
- Modify: `components/GostovanjaSection.tsx`

- [ ] **Korak 1: Izmeniti komponentu**

Zameniti hardkodovani niz sa props interfejsom. Dodati helper funkciju za parsiranje YouTube URL-a. Kompletan novi sadržaj fajla:

```tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export interface GostovanjeData {
  naziv: string;
  youtubeUrl: string;
  redosled: number;
}

interface Parsed {
  naziv: string;
  youtubeUrl: string;
  videoId: string;
  startTime: number;
}

function parseYouTubeUrl(url: string): { videoId: string; startTime: number } {
  try {
    const u = new URL(url);
    let videoId = '';
    if (u.hostname === 'youtu.be') {
      videoId = u.pathname.slice(1).split('?')[0];
    } else {
      videoId = u.searchParams.get('v') ?? '';
    }
    const t = u.searchParams.get('t') ?? '0';
    const startTime = parseInt(t.replace(/[^0-9]/g, ''), 10) || 0;
    return { videoId, startTime };
  } catch {
    return { videoId: '', startTime: 0 };
  }
}

interface Props {
  gostovanja: GostovanjeData[];
}

export default function GostovanjaSection({ gostovanja }: Props) {
  const parsed: Parsed[] = gostovanja.map((g) => ({
    naziv: g.naziv,
    youtubeUrl: g.youtubeUrl,
    ...parseYouTubeUrl(g.youtubeUrl),
  }));

  const [active, setActive] = useState<Parsed | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <section className="py-10 md:py-20">
        <div className="max-w-[80rem] mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
            Gostovanja
          </h2>
          <p className="text-center text-muted-foreground mb-10 md:mb-16">
            Pogledajte moja gostovanja u medijima
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {parsed.map((g) => (
              <button
                key={g.videoId}
                onClick={() => setActive(g)}
                className="group bg-card p-4 rounded-lg shadow-lg border border-border hover:shadow-xl transition-shadow text-left w-full"
              >
                <div className="relative h-[160px] mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={`https://img.youtube.com/vi/${g.videoId}/mqdefault.jpg`}
                    alt={g.naziv}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="bg-[#FF0000] rounded-xl px-2.5 py-1 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6 translate-x-0.5"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl font-bold text-primary mb-2 text-left">
                    {g.naziv}
                  </h3>
                  <div className="flex justify-end px-10">
                    <span className="text-primary text-sm font-semibold group-hover:text-secondary transition-colors inline-flex items-center gap-2">
                      Pogledaj
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${active.videoId}?start=${active.startTime}&autoplay=1`}
              title={active.naziv}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl"
            />
            <button
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm flex items-center gap-1"
            >
              Zatvori ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
```

- [ ] **Korak 2: Commit**

```bash
git add components/GostovanjaSection.tsx
git commit -m "refactor: GostovanjaSection accepts gostovanja as props"
```

---

### Task 5: Kreirati `GostovanjaSectionServer.tsx`

**Files:**
- Create: `components/GostovanjaSectionServer.tsx`

- [ ] **Korak 1: Kreirati async server wrapper**

```tsx
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
```

- [ ] **Korak 2: Commit**

```bash
git add components/GostovanjaSectionServer.tsx
git commit -m "feat: add GostovanjaSectionServer async wrapper"
```

---

### Task 6: Refaktorisati `SaradniciSection` u async server komponentu

**Files:**
- Modify: `components/SaradniciSection.tsx`

- [ ] **Korak 1: Izmeniti komponentu**

```tsx
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";

interface SanityImage {
  asset: { _ref: string; _type: string };
}

interface Saradnik {
  naziv: string;
  url: string;
  logo: SanityImage;
}

async function getSaradnici(): Promise<Saradnik[]> {
  const query = `*[_type == "saradnik"] | order(redosled asc) {
    naziv,
    url,
    logo
  }`;
  return client.fetch(query);
}

export default async function SaradniciSection() {
  const saradnici = await getSaradnici();

  return (
    <section className="py-10 md:py-20 bg-muted">
      <div className="max-w-[80rem] mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-10 md:mb-16">
          Saradnici
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {saradnici.map((s) => (
            <Link
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 rounded-lg border border-border bg-card shadow hover:shadow-lg hover:border-primary transition-all gap-4"
            >
              <div className="relative w-full h-32">
                <Image
                  src={urlFor(s.logo).width(400).url()}
                  alt={s.naziv}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors">
                {s.naziv}
              </span>
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors mt-auto self-end inline-flex items-center gap-1">
                Poseti
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Zm6.75-3a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.06l-6.22 6.22a.75.75 0 0 1-1.06-1.06L15.44 3H11a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Korak 2: Commit**

```bash
git add components/SaradniciSection.tsx
git commit -m "refactor: SaradniciSection fetches from Sanity"
```

---

### Task 7: Ažurirati `app/page.tsx`

**Files:**
- Modify: `app/page.tsx`

- [ ] **Korak 1: Zameniti import**

U `app/page.tsx` zameniti:
```tsx
import GostovanjaSection from "@/components/GostovanjaSection";
```
sa:
```tsx
import GostovanjaSectionServer from "@/components/GostovanjaSectionServer";
```

I u JSX zameniti:
```tsx
<GostovanjaSection />
```
sa:
```tsx
<GostovanjaSectionServer />
```

- [ ] **Korak 2: Commit**

```bash
git add app/page.tsx
git commit -m "feat: use server wrapper for gostovanja on home page"
```

---

### Task 8: Uneti postojeće podatke u Sanity Studio

> Ovo je ručni korak — unesite podatke kroz Sanity Studio na `/studio`.

- [ ] **Gostovanja za unos:**

| naziv | youtubeUrl | redosled |
|-------|-----------|----------|
| Podcast Nutrimedicina | https://www.youtube.com/watch?v=ZUf4kd4KG-4&t=1299s | 1 |
| Žena za sva vremena | https://www.youtube.com/watch?v=Xi_6cOwGUZ0&t=250s | 2 |
| Agro ordinacija | https://www.youtube.com/watch?v=MLnqY_IhACA&t=548s | 3 |
| Hajde da razgovaramo | https://www.youtube.com/watch?v=2yxndfjvEY8&t=322s | 4 |

- [ ] **Saradnici za unos** (logoi: uploadovati iz `/public` foldera):

| naziv | url | logo fajl | redosled |
|-------|-----|-----------|----------|
| Nutricionističko savetovalište Biljana Mladenović | https://nutricionistabiljana.com/ | /biljana.png | 1 |
| Med Medik ordinacija | https://www.medmedik.rs/ | /MedMedik.png | 2 |
| Institut za praktičnu humanistiku | https://iph.edu.rs/ | /institut.gif | 3 |
| Edumaris – Centar za ishranu | https://edumaris.rs/ | /edumaris.PNG | 4 |

---

## Napomene

- `GostovanjaSection` ostaje `"use client"` zbog lightbox useState/useEffect — ne menjati to
- `SaradniciSection` nema client state, pa može biti direktno async server komponenta
- Nakon unosa podataka u Sanity, sekcije se prikazuju dinamički; stari hardkodovani nizovi su uklonjeni
- Lokalni logo fajlovi u `/public` mogu ostati (nisu u konfliktu) ili se mogu ukloniti nakon migracije
