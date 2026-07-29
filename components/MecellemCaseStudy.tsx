import Image from "next/image";

const heroImage = "/projects/mecellem/mecellem-project.png";

export function MecellemCaseStudy() {
  return (
    <article className="mecellem-case">
      <header className="mecellem-hero" aria-label="Mecellem case study hero">
        <figure className="mecellem-visual mecellem-visual--hero">
          <Image
            src={heroImage}
            alt="Mecellem legal intelligence product interface"
            width={1410}
            height={1200}
            priority
          />
        </figure>
      </header>
    </article>
  );
}
