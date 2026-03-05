"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";

const viralVideos = [
  "https://www.tiktok.com/t/ZP8CLBo8L/",
  "https://www.tiktok.com/@brainrot_mukbang_/video/7606601865580514591?_r=1&_t=ZN-94P5rPTd6W6",
  "https://www.tiktok.com/t/ZP8CLftTQ/",
];

type TikTokPreview = {
  title: string;
  thumbnail_url: string;
  author_name: string;
};

export function ViralVideos() {
  const [previews, setPreviews] = useState<Record<string, TikTokPreview>>({});

  useEffect(() => {
    let isMounted = true;

    async function loadPreviews() {
      const results = await Promise.all(
        viralVideos.map(async (url) => {
          try {
            const response = await fetch(
              `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`
            );
            if (!response.ok) {
              return [url, null] as const;
            }
            const data = (await response.json()) as TikTokPreview;
            return [url, data] as const;
          } catch {
            return [url, null] as const;
          }
        })
      );

      if (!isMounted) return;

      const mapped: Record<string, TikTokPreview> = {};
      results.forEach(([url, data]) => {
        if (data) mapped[url] = data;
      });
      setPreviews(mapped);
    }

    loadPreviews();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="viral-videos" className="py-20 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3B32] mb-4">
            Viral Videos
          </h2>
          <p className="text-xl text-[#6B5A4E] max-w-2xl mx-auto">
            Watch the latest Ballerina Cappuccina clips taking over TikTok.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {viralVideos.map((url, index) => {
            const preview = previews[url];
            return (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="group glass-card rounded-2xl border border-[#FFD1DC] overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[9/16] bg-[#FFE8EE]">
                  {preview?.thumbnail_url ? (
                    <img
                      src={preview.thumbnail_url}
                      alt={preview.title || `Viral TikTok ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#6B5A4E] text-lg font-medium">
                      Loading preview...
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                    <span className="w-14 h-14 rounded-full bg-white/90 text-[#4A3B32] flex items-center justify-center shadow-lg">
                      <Play size={24} />
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-[#4A3B32] font-semibold line-clamp-2 mb-2">
                    {preview?.title || `Viral Video ${index + 1}`}
                  </p>
                  <p className="text-[#6B5A4E] text-sm">
                    {preview?.author_name ? `@${preview.author_name}` : "TikTok"}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
