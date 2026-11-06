import type { Metadata } from "next";
import ThankYou from "@/components/ThankYou";

export const metadata: Metadata = {
  title: "Thank you | DAMAC Islands 2 | Red Carpet Real Estate",
  description: "Thanks for registering your interest in DAMAC Islands 2. A Red Carpet specialist will contact you shortly.",
  // Keep the conversion page out of search results so it only counts real form submissions.
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function Page() {
  return <ThankYou />;
}
