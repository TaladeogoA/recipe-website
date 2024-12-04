import { useState } from "react";
import Slider from "react-slick";

export function useSlider() {
  const [slider, setSlider] = useState<Slider | null>(null);
  return {
    slider,
    setSlider,
    next: () => slider?.slickNext(),
    prev: () => slider?.slickPrev(),
  };
}
