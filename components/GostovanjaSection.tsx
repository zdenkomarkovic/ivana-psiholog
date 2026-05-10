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
