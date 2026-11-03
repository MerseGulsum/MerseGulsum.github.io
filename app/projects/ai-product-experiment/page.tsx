"use client";

import Link from "next/link";
import { useEffect } from "react";

// Old address of the Mecellem case study; forwards visitors to /projects/mecellem/
export default function OldMecellemRedirect() {
  useEffect(() => {
    window.location.replace("/projects/mecellem/");
  }, []);

  return (
    <main style={{ padding: "160px 24px", textAlign: "center" }}>
      <p>
        This page has moved to <Link href="/projects/mecellem/">/projects/mecellem/</Link>.
      </p>
    </main>
  );
}
