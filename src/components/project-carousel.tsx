"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Media } from "@/types/portfolio";

type ProjectCarouselProps = {
  title: string;
  media: Media[];
  priority?: boolean;
};

export function ProjectCarousel({ title, media, priority = false }: ProjectCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, media.length - 1));
    const track = trackRef.current;

    if (track) {
      track.scrollTo({ left: track.clientWidth * nextIndex, behavior: "smooth" });
    }
    setActiveIndex(nextIndex);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    const nextIndex = Math.round(track.scrollLeft / track.clientWidth);
    if (nextIndex !== activeIndex) setActiveIndex(nextIndex);
  };

  return (
    <div className="carousel" aria-roledescription="carousel" aria-label={`${title} 미디어`}>
      <div className="carousel-track" ref={trackRef} onScroll={handleScroll}>
        {media.map((item, index) => (
          <div
            className="carousel-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} / ${media.length}`}
            key={item.src}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={priority && index === 0}
                unoptimized={item.src.endsWith(".gif")}
                sizes="(max-width: 744px) 100vw, (max-width: 1128px) 50vw, 40vw"
              />
            ) : (
              <video controls preload="metadata" aria-label={item.alt} poster={item.poster}>
                <source src={item.src} />
                영상 재생을 지원하지 않는 브라우저입니다.
              </video>
            )}
          </div>
        ))}
      </div>

      {media.length > 1 && (
        <>
          <button
            className="carousel-arrow carousel-arrow-prev"
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="이전 이미지"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            className="carousel-arrow carousel-arrow-next"
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === media.length - 1}
            aria-label="다음 이미지"
          >
            <span aria-hidden="true">›</span>
          </button>
          <div className="carousel-dots" role="group" aria-label="미디어 선택">
            {media.map((item, index) => (
              <button
                type="button"
                className={index === activeIndex ? "is-active" : ""}
                onClick={() => goTo(index)}
                aria-label={`${index + 1}번째 미디어 보기`}
                aria-current={index === activeIndex ? "true" : undefined}
                key={item.src}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
