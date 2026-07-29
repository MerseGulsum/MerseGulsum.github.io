"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectBackButton } from "@/components/ProjectBackButton";
import styles from "./ProviaCareerCaseStudy.module.css";

const assetPath = "/projects/provia-career/figma-assets";
const heroAssetPath = "/projects/provia-career/hero";
const aboutProductAssetPath = "/projects/provia-career/about-product";
const feedbackAssetPath = "/projects/provia-career/feedback-section";
const laptopShowcaseAssetPath = "/projects/provia-career/laptop-showcase";
const userJourneyAssetPath = "/projects/provia-career/user-journey";
const galleryCompositionAssetPath = "/projects/provia-career/gallery-composition";
const logoSectionAssetPath = "/projects/provia-career/logo-section";

const projectDetails = [
  ["Project", "Provia Career"],
  ["My Role", "Product Designer"],
  ["Product Type", "AI-Powered Interview Preparation App"],
  ["Designer", "Gülsüm KOÇAN"]
];

const qualitativeResearchQuestions = {
  left: [
    "What makes you feel unprepared or anxious before interviews?",
    "Do you feel the feedback you receive is specific and actionable?",
    "What kind of feedback would help you improve after an interview?",
    "What makes an interview practice session feel realistic to you?"
  ],
  right: [
    "How do you currently prepare for interviews?",
    "Have you used interview practice platforms before? What was missing?",
    "How do you know you are improving?",
    "On a scale of 1 to 10, how confident do you feel before an interview? Why?"
  ]
};

const personas = [
  {
    label: "Persona 1",
    name: "Ali, 23",
    role: "Junior Software Developer",
    experience: "1 year",
    image: `${assetPath}/persona-ali.png`,
    description:
      "Ali is preparing for technical interviews at mid-size tech companies. He understands coding concepts but struggles to structure his answers clearly under pressure. He wants realistic practice and feedback that helps him improve his communication and confidence.",
    goals: ["Practice technical interviews", "Improve structured answers", "Track performance over time"],
    painPoints: [
      "Gets nervous during live interviews",
      "Unsure if answers are “good enough”",
      "No clear way to measure improvement"
    ]
  },
  {
    label: "Persona 2",
    name: "Elif, 29",
    role: "Marketing Specialist",
    experience: "5 years",
    image: `${assetPath}/persona-elif.png`,
    description:
      "Elif is applying for a Senior Marketing position. She has strong experience but struggles with behavioral and case-based interview questions. She wants structured feedback to refine her storytelling and highlight measurable results.",
    goals: ["Improve behavioral interview answers", "Present achievements with data", "Gain confidence before real interviews"],
    painPoints: [
      "Gives long but unfocused answers",
      "Finds it difficult to quantify achievements",
      "Lacks structured practice sessions"
    ]
  }
];

const targetAudienceGroups = [
  {
    value: "45%",
    title: "Students & Early-Career Professionals (18–24)",
    text: "Preparing for internships, graduate programs, and first full-time roles."
  },
  {
    value: "35%",
    title: "Mid-Level Professionals (25–35)",
    text: "Preparing for career transitions, promotions, or international opportunities."
  },
  {
    value: "20%",
    title: "Experienced Professionals (35+)",
    text: "Preparing for leadership, senior-level, or specialized roles."
  }
];

const userJourneyStages = [
  {
    title: "Awareness",
    items: [
      "Struggling with real interview confidence",
      "Watching interview preparation videos",
      "Reading career advice online",
      "Looking for structured practice tools"
    ]
  },
  {
    title: "Onboarding",
    items: [
      "Creating an account",
      "Selecting role and experience level",
      "Uploading CV or portfolio",
      "Setting interview goals"
    ]
  },
  {
    title: "Interview Session",
    items: [
      "Starting a simulated interview",
      "Answering AI-generated questions",
      "Receiving follow-up questions",
      "Completing the session"
    ]
  },
  {
    title: "Feedback & Reflection",
    items: [
      "Viewing session performance score",
      "Reviewing strengths and weaknesses",
      "Understanding improvement areas",
      "Comparing with previous sessions"
    ]
  },
  {
    title: "Progress & Growth",
    items: [
      "Tracking performance trends",
      "Practicing again with improvements",
      "Gaining structured confidence",
      "Preparing for real interviews"
    ]
  }
];

const problemSolutionPairs = [
  {
    problem:
      "Existing interview preparation platforms often lack structured evaluation systems and realistic conversational dynamics.",
    solution:
      "Designed a structured interview framework supported by adaptive AI follow-up flows and performance-oriented evaluation models."
  },
  {
    problem:
      "Feedback experiences are frequently limited to generic responses without actionable performance insights.",
    solution:
      "Developed category-based feedback systems focused on communication quality, response clarity, confidence, and improvement opportunities."
  },
  {
    problem: "Users have limited visibility into long-term progress and interview performance development.",
    solution:
      "Introduced measurable progress tracking supported by session analytics, performance trends, and interview history insights."
  },
  {
    problem: "Interview experiences are rarely personalized according to user goals, roles, or experience levels.",
    solution:
      "Enabled personalized interview generation based on role selection, seniority level, interview type, and career objectives."
  }
];

function FigmaToolIcon() {
  return (
    <span className={styles.figmaToolIcon} aria-label="Figma">
      <Image src={`${heroAssetPath}/tool-figma-back.svg`} alt="" fill sizes="48px" />
      <Image src={`${heroAssetPath}/tool-figma-path-1.svg`} alt="" fill sizes="48px" />
      <Image src={`${heroAssetPath}/tool-figma-path-2.svg`} alt="" fill sizes="48px" />
      <Image src={`${heroAssetPath}/tool-figma-path-3.svg`} alt="" fill sizes="48px" />
      <Image src={`${heroAssetPath}/tool-figma-path-4.svg`} alt="" fill sizes="48px" />
      <Image src={`${heroAssetPath}/tool-figma-path-5.svg`} alt="" fill sizes="48px" />
    </span>
  );
}

function PhotoshopToolIcon() {
  return (
    <span className={styles.layeredToolIcon} aria-label="Adobe Photoshop">
      <Image src={`${heroAssetPath}/tool-photoshop-surface.svg`} alt="" fill sizes="48px" />
      <Image src={`${heroAssetPath}/tool-photoshop-ps.svg`} alt="" fill sizes="48px" />
    </span>
  );
}

function ClaudeToolIcon() {
  return (
    <span className={styles.simpleToolIcon} aria-label="Claude">
      <Image src={`${heroAssetPath}/tool-claude-logo.svg`} alt="" fill sizes="48px" />
    </span>
  );
}

function ChatGptToolIcon() {
  return (
    <span className={styles.simpleToolIcon} aria-label="ChatGPT">
      <Image src={`${heroAssetPath}/tool-chatgpt.png`} alt="" fill sizes="48px" />
    </span>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.sectionIntro} data-provia-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export function ProviaCareerCaseStudy() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !rootRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.from("[data-provia-hero]", {
        autoAlpha: 0,
        y: 30,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08
      });

      gsap.utils.toArray<HTMLElement>("[data-provia-reveal]").forEach((item) => {
        gsap.from(item, {
          autoAlpha: 0,
          y: 34,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
            once: true
          }
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-provia-image]").forEach((item) => {
        gsap.from(item, {
          autoAlpha: 0,
          scale: 0.975,
          y: 26,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 86%",
            once: true
          }
        });
      });
    }, rootRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className={styles.page} ref={rootRef}>
      <div className="section-inner">
        <header className={styles.hero} aria-label="Provia Career case study">
          <ProjectBackButton className={styles.heroBackButton} />

          <div className={styles.heroInfo} data-provia-hero>
            <dl className={styles.heroMeta}>
              {projectDetails.slice(0, 3).map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
              <div>
                <dt>Tools</dt>
                <dd className={styles.toolRow}>
                  <PhotoshopToolIcon />
                  <FigmaToolIcon />
                  <ClaudeToolIcon />
                  <ChatGptToolIcon />
                </dd>
              </div>
              <div>
                <dt>{projectDetails[3][0]}</dt>
                <dd>{projectDetails[3][1]}</dd>
              </div>
            </dl>
          </div>

          <div className={styles.heroVisual} data-provia-hero>
            <Image
              src={`${heroAssetPath}/phone-pedestal-glow.png`}
              alt="Floating Provia Career iPhone mockup above a platform."
              width={4096}
              height={2802}
              priority
              className={styles.heroMockup}
              sizes="(max-width: 900px) 100vw, 72vw"
            />
          </div>
        </header>

        <section className={`${styles.whatSection}`} aria-labelledby="what-is-provia">
          <div className={styles.whatText} data-provia-reveal>
            <h2 id="what-is-provia">What is Provia Career?</h2>
            <div className={styles.whatCopy}>
              <p>
                Provia is an <strong>AI-powered career preparation product</strong> that helps users practice job
                interviews through <strong>text, voice and video interview modes.</strong>
              </p>
              <p>
                The main goal of this project was to transform the{" "}
                <strong>uncertainty, lack of confidence and feedback gap</strong> users experience before interviews
                into a <strong>more structured and repeatable practice experience.</strong> With{" "}
                <strong>personalized AI feedback, performance tracking</strong> and a{" "}
                <strong>progress-focused dashboard</strong>, Provia makes users&apos; improvement visible over time.
              </p>
              <p>
                In this case study, I focused not only on <strong>interface design</strong>, but also on{" "}
                <strong>problem definition, user needs, product flow, feedback system, dashboard metrics</strong> and
                the <strong>end-to-end interview preparation experience.</strong>
              </p>
            </div>
          </div>
          <figure className={styles.whatPhone}>
            <Image
              src={`${aboutProductAssetPath}/what-is-provia-phone.png`}
              alt="Provia Career iPhone home screen with app icon and quick actions."
              width={1060}
              height={1955}
              sizes="(max-width: 760px) 72vw, (max-width: 1180px) 32vw, 25vw"
              unoptimized
            />
          </figure>
        </section>

        <section className={styles.feedbackComposition} aria-label="Practice, Get Feedback, Improve">
          <Image
            className={styles.feedbackCompositionGrid}
            src={`${feedbackAssetPath}/feedback-grid.svg`}
            alt=""
            width={2429}
            height={1321}
            sizes="100vw"
            aria-hidden="true"
          />
          <div className={styles.feedbackCompositionInner}>
            <figure className={styles.feedbackCompositionPhone} data-provia-image>
              <Image
                src={`${feedbackAssetPath}/interview-feedback-phone.png`}
                alt="Provia Career iPhone Interview Feedback screen with overall score, performance trend and category analysis."
                width={4096}
                height={2891}
                sizes="(max-width: 760px) 92vw, (max-width: 1180px) 58vw, 52vw"
                unoptimized
              />
            </figure>
            <h2 className={styles.feedbackCompositionStatement} data-provia-reveal>
              <span>Practice.</span>
              <span className={styles.feedbackCompositionAccent}>Get Feedback.</span>
              <span>Improve.</span>
            </h2>
          </div>
        </section>

        <section className={styles.targetAudienceSection} aria-labelledby="target-audience">
          <Image
            className={styles.targetAudienceGrid}
            src={`${feedbackAssetPath}/feedback-grid.svg`}
            alt=""
            width={2429}
            height={1321}
            sizes="100vw"
            aria-hidden="true"
          />
          <div className={styles.targetAudienceIntro} data-provia-reveal>
            <h2 id="target-audience">Target Audience</h2>
            <p>
              Provia is designed for job seekers who want to prepare for interviews with more structure,
              confidence, and measurable progress.
            </p>
          </div>
          <div className={styles.targetAudienceGridContent}>
            {targetAudienceGroups.map((group) => (
              <article className={styles.targetAudienceItem} key={group.value} data-provia-reveal>
                <span>{group.value}</span>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.laptopShowcaseSection} aria-label="Provia laptop product showcase">
          <figure className={styles.laptopShowcaseVisual}>
            <Image
              src={`${laptopShowcaseAssetPath}/provia-laptop-showcase.png`}
              alt="Provia Career laptop interface mockup on a pedestal."
              width={3840}
              height={2893}
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1180px) calc(100vw - 80px), calc(100vw - 200px)"
              unoptimized
            />
          </figure>
        </section>

        <section className={styles.userJourneySection} aria-labelledby="user-journey">
          <Image
            className={styles.userJourneyLines}
            src={`${userJourneyAssetPath}/curved-lines.svg`}
            alt=""
            width={1488}
            height={304}
            sizes="(max-width: 760px) 120vw, 78vw"
            aria-hidden="true"
          />
          <div className={styles.userJourneyIntro} data-provia-reveal>
            <h2 id="user-journey">User Journey</h2>
            <p>
              Mapping the end-to-end interview preparation journey to identify pain points and improvement opportunities.
            </p>
          </div>
          <div className={styles.userJourneyGrid}>
            {userJourneyStages.map((stage) => (
              <article className={styles.userJourneyStage} key={stage.title} data-provia-reveal>
                <h3>{stage.title}</h3>
                <ul>
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.problemSolutionsSection} aria-labelledby="problem-solutions">
          <div className={styles.problemSolutionsIntro} data-provia-reveal>
            <h2 id="problem-solutions">Problem & Solutions</h2>
            <p>
              During the design process, I identified key challenges in interview preparation and translated each one into a
              focused product solution.
            </p>
          </div>

          <div className={styles.problemSolutionsGrid}>
            {problemSolutionPairs.map((pair) => (
              <article className={styles.problemSolutionPair} key={pair.problem} data-provia-reveal>
                <div className={styles.problemSolutionItem}>
                  <h3>Problem</h3>
                  <p>{pair.problem}</p>
                </div>
                <div className={styles.problemSolutionItem}>
                  <h3>Solution</h3>
                  <p>{pair.solution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.researchSection} aria-labelledby="qualitative-research">
          <div className={styles.researchIntro} data-provia-reveal>
            <h2 id="qualitative-research">Qualitative Research</h2>
            <p>
              Qualitative research was conducted to understand users&apos; emotional barriers, preparation habits, and
              expectations from realistic interview simulations.
            </p>
          </div>
          <div className={styles.researchComposition}>
            <ul className={`${styles.researchQuestionStack} ${styles.researchQuestionStackLeft}`} data-provia-reveal>
              {qualitativeResearchQuestions.left.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
            <figure className={styles.researchCharacter} data-provia-image>
              <Image
                src={`${assetPath}/research-character.png`}
                alt="Woman sitting on a white chair for the Provia qualitative research section."
                width={1536}
                height={2688}
                sizes="(max-width: 760px) 72vw, (max-width: 1180px) 38vw, 34vw"
              />
            </figure>
            <ul className={`${styles.researchQuestionStack} ${styles.researchQuestionStackRight}`} data-provia-reveal>
              {qualitativeResearchQuestions.right.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.personaSection} aria-labelledby="user-personas">
          <div className={styles.personaIntro} data-provia-reveal>
            <h2 id="user-personas">User Persona</h2>
            <p>
              Each persona highlights the users&apos; core motivations, frustrations, and goals to ensure the product
              solves real interview preparation problems.
            </p>
          </div>
          <div className={styles.personaGrid}>
            {personas.map((persona, index) => (
              <article
                key={persona.name}
                className={`${styles.persona} ${index === 1 ? styles.personaReverse : ""}`}
                data-provia-reveal
              >
                <figure className={styles.personaVisual} data-provia-image>
                  <Image
                    src={persona.image}
                    alt={`${persona.name} persona illustration.`}
                    width={1024}
                    height={1536}
                    sizes="(max-width: 760px) 72vw, (max-width: 1180px) 36vw, 34vw"
                  />
                </figure>
                <div className={styles.personaContent}>
                  <h3>{persona.label}</h3>
                  <dl className={styles.personaFacts}>
                    <div>
                      <dt>Name:</dt>
                      <dd>{persona.name}</dd>
                    </div>
                    <div>
                      <dt>Role:</dt>
                      <dd>{persona.role}</dd>
                    </div>
                    <div>
                      <dt>Experience:</dt>
                      <dd>{persona.experience}</dd>
                    </div>
                  </dl>
                  <p>{persona.description}</p>
                  <div className={styles.personaLists}>
                    <div>
                      <h4>Goals</h4>
                      <ul>
                        {persona.goals.map((goal) => (
                          <li key={goal}>{goal}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4>Pain Points</h4>
                      <ul>
                        {persona.painPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.galleryCompositionSection} aria-label="Provia Career gallery composition">
          <Image
            className={styles.galleryCompositionImage}
            src={`${galleryCompositionAssetPath}/provia-gallery-composition.png`}
            alt="Provia Career gallery composition with laptop and phone product mockups."
            width={3840}
            height={4781}
            sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1180px) calc(100vw - 80px), calc(100vw - 200px)"
            unoptimized
          />
        </section>

        <section className={styles.logoSection} aria-label="Provia Career logo">
          <Image
            className={styles.logoImage}
            src={`${logoSectionAssetPath}/provia-career-logo.png`}
            alt="Provia Career logo with blue app icon glow."
            width={3840}
            height={1622}
            sizes="(max-width: 760px) 82vw, 720px"
            unoptimized
          />
        </section>
      </div>
    </section>
  );
}
