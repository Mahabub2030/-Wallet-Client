import AboutHero from "@/components/modules/about/HeroSection";
// import StorySection from "@/components/modules/about/StorySection";
import MissionSection from "@/components/modules/about/MissionSection";
import OurStory from "@/components/modules/about/OurStory";
import OurTeems from "@/components/modules/about/OurTeems";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - Wallet</title>
        <meta name="description" content="This is About Page" />
      </Helmet>
      <AboutHero></AboutHero>
      {/* <StorySection></StorySection> */}
      <OurStory />
      {/* this our story */}
      <MissionSection></MissionSection>
      {/* <OurTeem></OurTeem> */}
      <OurTeems />
    </div>
  );
};

export default About;
