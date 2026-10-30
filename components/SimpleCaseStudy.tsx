import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { SimpleCase } from "@/data/caseStudies";
import { CaseVisual } from "@/components/CaseVisual";
import { ProjectBackButton } from "@/components/ProjectBackButton";
import styles from "./SimpleCaseStudy.module.css";

export function SimpleCaseStudy({ study }: { study: SimpleCase }) {
  return (
    <article className={styles.page}>
      <ProjectBackButton className={styles.back} />

      <header className={styles.header}>
        <p className={styles.eyebrow}>{study.category}</p>
        <h1 className={styles.title}>{study.title}</h1>
        <p className={styles.tagline}>{study.tagline}</p>

        <dl className={styles.meta}>
          {study.meta.map((item) => (
            <div key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>

        {study.liveUrl && (
          <a className="button-link" href={study.liveUrl} target="_blank" rel="noopener noreferrer">
            Live Site
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        )}
      </header>

      <figure className={styles.hero}>
        <CaseVisual image={study.hero} priority sizes="(max-width: 900px) 100vw, 1300px" />
      </figure>

      <section className={styles.row} aria-labelledby="overview">
        <h2 id="overview" className={styles.label}>Overview</h2>
        <div className={styles.overview}>
          {study.overview.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </section>

      {study.moodAfterOverview && (
        <figure className={styles.mood}>
          <CaseVisual image={study.moodAfterOverview} sizes="(max-width: 900px) 100vw, 1300px" />
        </figure>
      )}

      <section className={styles.split} aria-label="Problem and solution">
        <div className={styles.card}>
          <h2 className={styles.label}>Problem</h2>
          <p className={styles.intro}>{study.problem.intro}</p>
          <ul className={styles.list}>
            {study.problem.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div className={`${styles.card} ${styles.cardAccent}`}>
          <h2 className={styles.label}>Solution</h2>
          <p className={styles.intro}>{study.solution.intro}</p>
          <ul className={styles.list}>
            {study.solution.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {study.contributions && study.contributions.length > 0 && (
        <section className={styles.row} aria-labelledby="what-i-did">
          <h2 id="what-i-did" className={styles.label}>What I did</h2>
          <ol className={styles.contributions}>
            {study.contributions.map((item, i) => (
              <li key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {item}
              </li>
            ))}
          </ol>
        </section>
      )}

      {study.outcome && (
        <section className={styles.row} aria-labelledby="outcome">
          <h2 id="outcome" className={styles.label}>Outcome</h2>
          <div className={styles.overview}>
            {study.outcome.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </section>
      )}

      {study.moodBeforeDesigns && (
        <div className={styles.moodPair}>
          {study.moodBeforeDesigns.map((image) => (
            <figure key={image.src} className={styles.mood}>
              <CaseVisual image={image} sizes="(max-width: 900px) 100vw, 650px" />
            </figure>
          ))}
        </div>
      )}

      <section className={styles.gallerySection} aria-labelledby="designs">
        <h2 id="designs" className={styles.label}>Designs</h2>
        <div className={styles.gallery}>
          {study.gallery.map((image) => (
            <figure key={image.src ?? image.placeholder} className={image.size === "half" ? styles.half : styles.full}>
              <CaseVisual
                image={image}
                sizes={image.size === "half" ? "(max-width: 900px) 100vw, 650px" : "(max-width: 900px) 100vw, 1300px"}
              />
            </figure>
          ))}
        </div>
      </section>

      <nav className={styles.next} aria-label="Next project">
        <span className={styles.label}>Next project</span>
        <Link href={study.next.href} className={styles.nextLink}>
          {study.next.title}
          <ArrowRight aria-hidden="true" />
        </Link>
      </nav>
    </article>
  );
}
