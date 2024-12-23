import React, { lazy } from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import img1 from "../assets/aboutus-1.webp";
import bannerImg from "../assets/about-us-banner.webp";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import GetInTouch from "../components/GetInTouch";
import CallToAction from "../components/CallToAction";

const PageBanner = lazy(() => import("../components/Website/PageBanner"));
const BrandLogos = lazy(() => import("../components/BrandLogos"));

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageBanner
        position="left"
        title={"About Us"}
        banner={bannerImg}
        description="To be the world’s most trusted partner in AI technology and digital transformation, empowering businesses of all sizes to thrive in an increasingly complex and competitive landscape."
      />
      <section className="py-[3rem] wrapper grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col">
          <h1 data-aos="fade-right" className="heading">
            NexelQubeAI Leading in Software Development and Advanced Tech
            Solutions
          </h1>
          <p data-aos="fade-right" className="description mt-4">
            NexelQubeAI was founded with a vision to transform businesses by
            leveraging the power of AI and advanced technologies. Our passion
            for innovation drives us to deliver solutions that not only meet
            industry standards but set new ones. With a global reach and a team
            of experts dedicated to excellence, we are committed to helping our
            clients achieve unparalleled growth and success.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="relative w-full h-full lg:min-h-[50vh] rounded-lg overflow-hidden"
        >
          <img
            loading="lazy"
            src={img1}
            alt="about us"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="wrapper">
        <h1 data-aos="fade-right" className="heading">
          About Us
        </h1>
        <h5 data-aos="fade-right" className="text-2xl mt-4">
          The Journey of NexelQubeAI:
        </h5>
        <p data-aos="fade-right" className="description mt-3">
          At NexelQubeAI, we lead the charge in reshaping the digital world. By
          merging cutting-edge AI technology with expertise in web and mobile
          development, cloud computing, and data analytics, we empower
          businesses to thrive in a tech-driven future. Explore the intersection
          of innovation and technology, with solutions tailored to your unique
          goals. Together, let’s craft tomorrow’s possibilities.
        </p>
        <h5 data-aos="fade-right" className="text-2xl mt-8">
          Our Evolution and Influence:
        </h5>
        <p data-aos="fade-right" className="description mt-3">
          What started as a bold vision has grown into a team of over 204
          talented professionals. With a portfolio of 60+ advanced AI solutions,
          we’ve made a lasting impact across industries such as healthcare,
          finance, education, and sustainability.
        </p>
        <h5 data-aos="fade-right" className="text-2xl mt-8">
          A Legacy of Excellence:
        </h5>
        <ul
          data-aos="fade-right"
          className="description mt-3 list-disc list-inside"
        >
          <li>Over 60 AI-powered solutions deployed worldwide</li>
          <li>42+ digital transformation projects completed for enterprises</li>
          <li>Collaborations with 100+ forward-thinking partners</li>
          <li>Consistently achieving a 95% client satisfaction rate</li>
        </ul>
        <p className="mt-5 description">
          At NexelQubeAI, we’re not just innovating technology — we’re solving
          real-world challenges. Every project reflects our passion for
          redefining what’s possible with AI, driving progress and delivering
          value.
        </p>
      </section>

      <section className="my-[3rem] py-[3rem]">
        <div className="wrapper">
          <div className="mt-5 grid lg:grid-cols-2 gap-5">
            {/* Core Values Section */}
            <div className="bg-primary/10 space-y-6 p-7 rounded-md">
              <h1 data-aos="fade-up" className="heading">
                Our Core Values
              </h1>
              {[
                {
                  id: 1,
                  title: "Innovative Thinking",
                  desc: "We harness the power of AI to go beyond data processing, creating solutions that adapt, learn, and drive meaningful transformation.",
                },
                {
                  id: 2,
                  title: "Responsible AI",
                  desc: "Our commitment to transparency, fairness, and ethical practices ensures that every solution we develop puts humanity first.",
                },
                {
                  id: 3,
                  title: "Lifelong Learning",
                  desc: "Like our AI systems, we thrive on growth. We tackle challenges with curiosity and continually refine our approach for better outcomes.",
                },
                {
                  id: 4,
                  title: "Teamwork at Its Best",
                  desc: "We believe innovation is born from collaboration, bringing together diverse expertise to create groundbreaking solutions.",
                },
                {
                  id: 5,
                  title: "Empowering Design",
                  desc: "Our technology is designed to amplify human capabilities, solving complex problems and unlocking new opportunities for people everywhere.",
                },
              ].map((item) => (
                <div data-aos="fade-up" key={item.id} className="space-y-1">
                  <h3 className="text-xl font-semibold">{item.title}:</h3>
                  <p className="description">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mission and Vision Section */}
            <div className="grid grid-cols-1 gap-5 h-full">
              {[
                {
                  id: 1,
                  img: mission,
                  title: "Our Mission",
                  desc: "To lead the technological revolution by providing innovative AI-driven solutions that enhance business efficiency, foster growth, and create value for our clients worldwide.",
                },
                {
                  id: 2,
                  img: vision,
                  title: "Our Vision",
                  desc: "To be the world’s most trusted partner in AI technology and digital transformation, empowering businesses of all sizes to thrive in an increasingly complex and competitive landscape.",
                },
              ].map((item) => (
                <div
                  data-aos="fade-up"
                  key={item.id}
                  className="space-y-2 h-full p-5 bg-blue-500/40 gap-5 rounded-md"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[10rem] object-contain fill-white mb-5"
                  />
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="description">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <BrandLogos />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default AboutUs;
