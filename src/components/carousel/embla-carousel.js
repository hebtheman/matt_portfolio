import React, { useState, useEffect, useCallback } from "react";
import { DotButton } from "./embla-buttons";
import { useEmblaCarousel } from "embla-carousel/react";

import { data } from "./media/index";
import { Image } from "theme-ui";

const EmblaCarousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla,
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {data.map(({ title, subTitle, description, imgSrc, altText }, index) => (
              <div className="embla__slide" key={index}>
                <div style={{ textAlign: "center" }}>
                  <h1 className="embla__title">{ subTitle }</h1>
                  <h1 className="embla__subTitle">{ title }</h1>
                  <p>
                    {description}
                  </p>
                </div>
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    src={imgSrc}
                    alt={altText}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
};

export default EmblaCarousel;
