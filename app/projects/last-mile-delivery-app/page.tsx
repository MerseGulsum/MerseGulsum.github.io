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

export default function LastMileDeliveryAppPage() {
  return (
    <article className="last-mile-case">
      <div className="last-mile-case__flow">
        {caseStudySections.map((section, index) => (
          <section className="last-mile-case__section" key={`${section.title}-${index}`}>
            {section.eyebrow && <p className="eyebrow">{section.eyebrow}</p>}
            {index === 0 ? <h1>{section.title}</h1> : <h2>{section.title}</h2>}
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
