import { SocialLinks } from "@/components/SocialLinks";

export function Footer({ hideSocial = false }: { hideSocial?: boolean }) {
  return (
    <footer className="footer">
      <div>
        <strong>Merse Gülsüm</strong>
        <span>Product Designer & HMI Designer</span>
      </div>
      {!hideSocial && <SocialLinks compact includeInstagram />}
      <p>© 2026</p>
    </footer>
  );
}
