import Effects from "@/components/Effects";
import Gallery from "@/components/Gallery";
import { LeadProvider } from "@/components/Lead";
import Location from "@/components/Location";
import {
  Amenities, Closing, EcoLiving, Faq, FloatingBar, Footer, Header, Hero, Homes, Overview, StatsBand,
} from "@/components/Sections";

export default function Page() {
  return (
    <LeadProvider>
      <div className="rc-prog" id="prog" />
      <div id="root" className="theme-dn bg-background text-foreground font-sans overflow-x-clip pb-20 md:pb-0">
        <Header />
        <Hero />
        <StatsBand />
        <Overview />
        <Location />
        <Gallery />
        <Homes />
        <EcoLiving />
        <Amenities />
        <Faq />
        <Closing />
        <Footer />
        <FloatingBar />
      </div>
      <Effects />
    </LeadProvider>
  );
}
