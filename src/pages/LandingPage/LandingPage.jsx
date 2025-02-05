import React, { lazy, memo } from "react";
import Header from "../../components/LandingPage/Header";
import {
  appDevelopmentServices,
  webDevelopmentServices,
} from "../../constants";
import Footer from "../../components/LandingPage/Footer";
import CallToAction from "../../components/CallToAction";
import Form from "../../components/Form";
import webImg from "../../assets/landingpage-services-imgs/web-development.webp";
import appImg from "../../assets/landingpage-services-imgs/app-development.webp";
import ceoImg from "../../assets/ceo.jpg";
import founderImg from "../../assets/founder.jpg";

const GetInTouch = lazy(() => import("../../components/GetInTouch"));
const Testimonials = lazy(() => import("../../components/Testimonials"));
const HomePageServicesList = lazy(() =>
  import("../../components/HomePageServicesList")
);
const TrustWorthySection = lazy(() =>
  import("../../components/TrustWorthySection")
);
const IndustriesWeServe = lazy(() =>
  import("../../components/IndustriesWeServe")
);
const BrandLogos = lazy(() => import("../../components/BrandLogos"));
const Portfolio = lazy(() => import("../../components/Portfolio"));
const Banner = lazy(() => import("../../components/LandingPage/Banner"));

const LandingPage = ({ page }) => {
  const isWebDevelopment = Boolean(page === "web-development");
  const servicesList = isWebDevelopment
    ? webDevelopmentServices
    : appDevelopmentServices;
  return (
    <>
      <Header />
      <Banner page={page} />
      <div className="bg-primary/5 py-[5rem] mb-[3rem]">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 items-center gap-5">
            <div className="aspect-video relative h-full w-full rounded-xl overflow-hidden">
              <img
                src={isWebDevelopment ? webImg : appImg}
                className="w-full h-full object-cover"
                alt=""
              />
              <div className="absolute left-0 top-0 w-full p-3 h-full flex items-center justify-center bg-black/60">
                <div className="text-white space-y-3 text-center">
                  <p className="font-sans text-3xl sm:text-4xl font-bold">
                    Book Your Free Consultation
                  </p>
                  <p className="description">
                    NexelQubeAI is an AI company based in Bengaluru. We help
                    organizations kickstart their AI journey. If you’re seeking
                    a solution for your organization to enhance customer
                    support, boost employee productivity, and make the most of
                    your organization’s data, look no further.
                  </p>
                </div>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
      <TrustWorthySection />
      <section
        id="services"
        className="w-screen py-[3rem] min-h-[70vh] flex justify-center relative"
      >
        <div className="blue-bg-shape -z-10 left-[-5%] rotate-45 -translate-y-1/2"></div>
        <div className="blue-bg-shape -z-10 right-[-5%] rotate-45 top-1/2 -translate-y-1/2"></div>
        <div className="wrapper flex flex-col items-center gap-5 z-10">
          <h1
            data-aos="fade-up"
            className="heading text-center max-w-6xl whitespace-pre-line capitalize"
          >
            {/* We provide the Best IT solution services */}
            {isWebDevelopment
              ? "Your website is your digital identity—ensure it captures the true essence of your brand."
              : "In the smartphone era, a mobile app serves as a gateway to enhanced customer engagement."}
          </h1>
          <p data-aos="fade-up" className="text-center max-w-6xl description">
            {isWebDevelopment
              ? "We believe that a great website should not only look good but also function flawlessly, driving conversions and providing measurable results."
              : "Each app we develop is a powerful tool designed to improve productivity, fostering greater engagement and empowering your company to thrive in an increasingly mobile-focused landscape."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 mt-4">
            {servicesList.map((item) => (
              <div
                data-aos="fade-up"
                className="relative group shadow-2xl group py-[4rem] md:py-[8rem] flex items-center overflow-hidden rounded-xl p-5"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  decoding="async"
                  width="550"
                  height="500"
                  className="absolute group-hover:scale-125 transition-all duration-500 w-full h-full inset-0 z-0 object-cover"
                />
                <div className="absolute w-full h-full inset-0 z-0 bg-black/65"></div>
                {/* <div className="mb-5 w-[12rem] h-[12rem] p-3 rounded-full bg-primary/20 flex items-center justify-center">
                  <img
                    loading="lazy"
                    src={item.icon}
                    alt="icon"
                    className="w-[7rem] grayscale object-contain"
                  />
                </div> */}
                <div className="flex flex-col gap-2 items-center relative text-white z-10">
                  <h6 className="font-medium text-center text-3xl">
                    {item.title}
                  </h6>
                  <p className=" text-lg text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <HomePageServicesList />
      <IndustriesWeServe />
      <CallToAction />
      <Portfolio page={page} />
      <Testimonials />
      <section className="wrapper space-y-8 py-[2rem]">
        <div
          data-aos="fade-up"
          className="rounded-ss-3xl border rounded-ee-3xl max-w-7xl mx-auto grid md:grid-cols-[15%_auto] items-center gap-7 p-4"
        >
          <h3 className="heading block md:hidden">Our CEO's Message</h3>
          <div className="md:aspect-[3/4] w-full overflow-hidden flex flex-col">
            <img
              src={ceoImg}
              loading="lazy"
              alt="ceo"
              className="h-full w-fit md:w-full rounded-ss-3xl rounded-ee-3xl max-h-[20rem] object-contain"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="heading md:block hidden">Our CEO's Message</h3>
            <p className="description">
              At NexelQubeAI, we leverage the power of AI to create
              transformative digital experiences that elevate businesses. Our
              commitment to innovation drives us to develop intelligent
              solutions that enhance efficiency and foster growth. Together, we
              can turn your ideas into reality and shape a smarter future.
            </p>
            <p className="description !font-semibold text-start">
              - Prasanth, Nexelqube AI
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="px-4 rounded-tr-3xl border rounded-bl-3xl max-w-7xl mx-auto flex flex-col-reverse md:grid grid-cols-[auto_15%] items-center gap-7 p-4"
        >
          <div className="flex flex-col gap-5">
            <h3 className="heading md:block hidden">Our Founder's Message</h3>
            <p className="description">
              At Nexelqube AI, we're redefining the future with intelligent,
              cutting-edge solutions. Our mission is to empower businesses with
              AI-driven innovations that enhance efficiency, creativity, and
              growth. we craft intelligent solutions that push boundaries and
              unlock new possibilities. Our vision is to merge innovation with
              impact, transforming the way businesses thrive in an AI-driven
              world. Join us as we shape the next era of intelligent technology.
              The future is now—let’s build it together.
            </p>
            <p className="description !font-semibold md:text-end">
              - S.Keerthi Bai, Nexelqube AI
            </p>
          </div>
          <div className="md:aspect-[3/4] w-full overflow-hidden flex flex-col">
            <img
              src={founderImg}
              loading="lazy"
              alt="ceo"
              className="h-full w-fit md:w-full rounded-tr-3xl rounded-bl-3xl max-h-[20rem] object-cover border"
            />
          </div>
          <h3 className="heading self-start block md:hidden">
            Our Founder's Message
          </h3>
        </div>
      </section>
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default memo(LandingPage);
