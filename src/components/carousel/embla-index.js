import React from "react";
import EmblaCarousel from "./embla-carousel";
import { data } from './media/index'

const slides = data.keys();

export default function EmblaIndex () {
  return (
    <main>
      <EmblaCarousel slides={slides} />
    </main>
  )
};

