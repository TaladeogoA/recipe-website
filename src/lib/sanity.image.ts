import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

type SanityImageSource = {
  asset: {
    _ref: string;
    _type?: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
};

const builder = imageUrlBuilder(client);

export function urlForImage(source: SanityImageSource | null) {
  if (!source) {
    return null;
  }

  return builder.image(source).auto("format").fit("max");
}

// Usage examples:
// Basic URL: urlForImage(image).url()
// With size: urlForImage(image).width(300).height(300).url()
// With blur: urlForImage(image).blur(50).url()
// With format: urlForImage(image).format('webp').url()
