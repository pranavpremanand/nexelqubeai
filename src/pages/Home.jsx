import React, { lazy, memo } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import aboutImg from "../assets/aboutus-3.webp";
import aboutImg2 from "../assets/why-ai-matters.webp";
import ceoImg from "../assets/ceo.jpg";
import BrandLogos from "../components/BrandLogos";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

const Banner = lazy(() => import("../components/Website/Banner"));
const TrustWorthySection = lazy(() =>
  import("../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() => import("../components/IndustriesWeServe"));
const HomePageServicesList = lazy(() =>
  import("../components/HomePageServicesList")
);
const GetInTouch = lazy(() => import("../components/GetInTouch"));

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <section id="about-us" className="relative pt-[5rem] pb-[3rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <p
            data-aos="fade-down"
            className="gradient-text uppercase text-center mb-5 md:mb-7"
          >
            About Us
          </p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div className="flex flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">
                Innovation to transform your organization.
              </h3>
              <p className="description">
                At NexelQubeAI, we are at the forefront of revolutionizing the
                digital landscape. Our cutting-edge AI solutions, combined with
                unmatched expertise in web and mobile development, cloud
                computing, data analytics, and beyond, are designed to propel
                your business into the future. Discover a world where technology
                meets innovation, tailored to meet your unique needs. Let’s
                build the future, together. <br />
                <br /> At NexelQubeAI, we are at the forefront of AI innovation,
                leveraging cutting-edge technologies to transform businesses and
                enhance user experiences. Our AI-driven solutions are designed
                to empower organizations with the tools they need to thrive in
                an increasingly digital world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomePageServicesList />
      <TrustWorthySection />
      <section id="about-us" className="relative py-[3rem]">
        <div className="blurred-red-circle h-[25rem] w-[25rem] top-[-10rem] left-[-10rem] -z-10"></div>
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-5 md:gap-10">
            <div data-aos="fade-right" className="flex flex-col gap-5">
              <h3 className="heading">Why AI Matters</h3>
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="about"
                className="md:hidden h-full w-full aspect-video rounded-xl object-cover"
              />
              <p className="description">
                Artificial Intelligence is revolutionizing the way we interact
                with technology. By harnessing the power of AI, businesses can
                streamline operations, enhance decision-making, and deliver
                personalized experiences to their customers. With advanced
                algorithms and machine learning capabilities, we help our
                clients unlock new opportunities and achieve their strategic
                goals.
              </p>
            </div>
            <div className="md:flex hidden flex-col">
              <img
                data-aos="fade-left"
                loading="lazy"
                src={aboutImg2}
                alt="about"
                className="h-full w-full aspect-video rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <IndustriesWeServe />
      <CallToAction />
      <Portfolio />
      <Testimonials />
      <section className="wrapper">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[15%_auto] items-center gap-7 pt-[5rem] pb-[3rem]">
          <div className="md:aspect-[3/4] w-full overflow-hidden flex flex-col">
            <img
              src={ceoImg}
              loading="lazy"
              alt="ceo"
              className="h-full w-fit md:w-full rounded-ss-3xl rounded-ee-3xl max-h-[20rem] object-contain"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="heading">Our CEO Message</h3>
            <p className="description">
              At NexelQubeAI, we leverage the power of AI to create
              transformative digital experiences that elevate businesses. Our
              commitment to innovation drives us to develop intelligent
              solutions that enhance efficiency and foster growth. Together, we
              can turn your ideas into reality and shape a smarter future.
            </p>
          </div>
        </div>
      </section>
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default memo(Home);
