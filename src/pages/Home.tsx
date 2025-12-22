import ChooseSection from "@/components/modules/home/ChooseSection";
import FeaturesSection from "@/components/modules/home/FeaturesSection";
import { HeroSections } from "@/components/modules/home/Heros";
import ReviewSection from "@/components/modules/home/ReviewSection";
import WorksSection from "@/components/modules/home/WorksSection";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home - Digital Wallet</title>
        <meta name="description" content="This is Home Page" />
      </Helmet>
      {/* <HeroSection></HeroSection> */}
      <HeroSections></HeroSections>
      <FeaturesSection></FeaturesSection>
      <WorksSection></WorksSection>
      <ChooseSection></ChooseSection>
      <ReviewSection></ReviewSection>
    </div>
  );
}
