import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={fill ? className : `relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={75}
        loading={priority ? "eager" : "lazy"}
        className={`
          duration-700 ease-in-out
          ${isLoading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"}
          ${className}
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
}
