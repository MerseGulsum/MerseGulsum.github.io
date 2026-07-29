import { ExternalLink } from "lucide-react";
import { socialLinks } from "@/data/socialLinks";

type SocialLinksProps = {
  compact?: boolean;
  includeInstagram?: boolean;
};

export function SocialLinks({ compact = false, includeInstagram = false }: SocialLinksProps) {
  const links = includeInstagram
    ? socialLinks
    : socialLinks.filter((link) => ["LinkedIn", "Dribbble", "Behance"].includes(link.label));

  return (
    <div className={compact ? "social-links social-links--compact" : "social-links"}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="social-link"
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={link.ariaLabel}
        >
          <span>{link.label}</span>
          <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
        </a>
      ))}
    </div>
  );
}
