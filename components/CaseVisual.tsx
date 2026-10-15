import Image from "next/image";
import type { CaseImage } from "@/data/caseStudies";

export function CaseVisual({ image, sizes, priority = false }: { image: CaseImage; sizes: string; priority?: boolean }) {
  if (!image.src) {
    return (
      <div
        className="visual-slot visual-slot--static"
        style={{ aspectRatio: `${image.width} / ${image.height}` }}
        role="img"
        aria-label={image.alt}
      >
        <span>{image.placeholder ?? "Visual"} · coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={priority}
      sizes={sizes}
    />
  );
}
