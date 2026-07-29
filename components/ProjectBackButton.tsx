"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type ProjectBackButtonProps = {
  className?: string;
};

export function ProjectBackButton({ className }: ProjectBackButtonProps) {
  const router = useRouter();

  function handleClick() {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/projects");
  }

  return (
    <button
      className={["project-back-button", className].filter(Boolean).join(" ")}
      type="button"
      onClick={handleClick}
      aria-label="Back to projects"
    >
      <ArrowLeft size={17} strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
