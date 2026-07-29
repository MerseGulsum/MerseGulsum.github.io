import Image from "next/image";
import recipientShowcase from "../../../references/alıcı.png";
import kargoShowcase from "../../../references/kargo.png";

export const metadata = {
  title: "Last Mile Delivery App"
};

const caseStudySections = [
  {
    eyebrow: "Overview",
    title: "Last Mile Delivery App",
    body: [
      "Last Mile Delivery App is a delivery ecosystem I designed for cargo companies, made up of two connected but separate apps: a route and delivery management app for couriers, and a tracking app for recipients to follow all their packages in one place."
    ]
  },
  {
    title: "The Problem",
    body: [
      "In Turkey, package tracking is typically siloed by company, forcing users with multiple orders to switch between several apps. On the courier side, route planning is often left to individual experience with no systematic optimization. Reporting delivery issues is slow and fragmented for both sides."
    ]
  },
  {
    title: "My Role",
    body: [
      "I designed both apps end-to-end, from research and information architecture to UI and design system."
    ]
  },
  {
    title: "Research & Key Insight",
    body: [
      "Through competitive research, I found that the biggest pain point for users was not knowing what to do when something went wrong with a delivery. This insight led me to position recipient-initiated issue reporting as the product's core differentiator."
    ]
  },
  {
    title: "Courier App",
    body: [
      "The courier app automatically loads the day's addresses as entered by the company. Couriers can sort their route based on preference — nearest to farthest, farthest to nearest, or the most cost-efficient path.",
      "Once the route is set, the courier begins deliveries. At each stop, delivery is confirmed one of two ways: entering the recipient's 6-digit code, or scanning their QR code. This dual-verification system balances speed and security, and adapts to different field conditions. If an issue comes up mid-delivery, couriers can report it instantly through the same flow."
    ]
  },
  {
    title: "Key Screens",
    list: [
      "Daily package list and summary",
      "Delivery detail",
      "Route sorting",
      "Code verification",
      "QR verification",
      "Issue reporting"
    ]
  },
  {
    title: "Recipient App",
    body: [
      "The recipient app's goal is to make every package visible in one place, regardless of which company shipped it. Users can track their package's live status, estimated delivery window, live courier location and contact the courier directly.",
      "When something goes wrong, users can submit a report with optional photo attachments and track the status of previous reports from the same flow."
    ]
  },
  {
    title: "Key Screens",
    list: [
      "Delivery tracking",
      "Live map",
      "Courier information",
      "Delivery confirmation",
      "Report issue flow",
      "Feedback history"
    ]
  },
  {
    title: "Design Decisions",
    decisions: [
      {
        title: "Dual Verification",
        body: "Offering both code and QR confirmation provides flexibility across different delivery scenarios."
      },
      {
        title: "Structured Reporting",
        body: "Breaking issue reporting into predefined categories makes reporting faster for users and produces cleaner operational data."
      },
      {
        title: "Simple Route Planning",
        body: "Keeping courier-side planning lightweight supports faster decision making in the field."
      }
    ]
  }
];

const overviewSections = caseStudySections.slice(0, 4);
const detailSections = caseStudySections.slice(4);

export default function LastMileDeliveryAppPage() {
  return (
    <article className="last-mile-case">
      <div className="last-mile-case__flow">
        <section className="last-mile-case__intro" aria-labelledby="last-mile-title">
          <div className="last-mile-case__intro-copy">
            {overviewSections.map((section, index) => (
              <div className="last-mile-case__intro-section" key={`${section.title}-${index}`}>
                {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
                {index === 0 ? <h1 id="last-mile-title">{section.title}</h1> : <h2>{section.title}</h2>}
                {section.body && (
                  <div className="last-mile-case__copy">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Image
            className="last-mile-case__overview-image"
            src="/projects/last-mile-delivery-app/qr.png"
            alt="QR verification screen from the Last Mile Delivery App."
            width={5000}
            height={3500}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1099px) calc(100vw - 80px), 52vw"
            decoding="async"
          />
        </section>

        {detailSections.map((section, index) => (
          <section className="last-mile-case__section" key={`${section.title}-${index}`}>
            {section.title === "Courier App" && (
              <Image
                className="last-mile-case__courier-showcase"
                src={kargoShowcase}
                alt="Last Mile Delivery courier app showcase."
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1099px) calc(100vw - 80px), 1200px"
                loading="lazy"
                decoding="async"
              />
            )}
            {section.title === "Recipient App" && (
              <Image
                className="last-mile-case__courier-showcase"
                src={recipientShowcase}
                alt="Last Mile Delivery recipient app showcase."
                sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1099px) calc(100vw - 80px), 1200px"
                loading="lazy"
                decoding="async"
              />
            )}
            <h2>{section.title}</h2>
            {section.body && (
              <div className="last-mile-case__copy">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
            {section.list && (
              <ul className="last-mile-case__list">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {section.decisions && (
              <div className="last-mile-case__decisions">
                {section.decisions.map((decision) => (
                  <div className="last-mile-case__decision" key={decision.title}>
                    <h2>{decision.title}</h2>
                    <p>{decision.body}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
