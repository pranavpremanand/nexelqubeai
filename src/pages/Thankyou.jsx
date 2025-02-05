import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../constants";
import Footer from "../components/Website/Footer";

const Thankyou = () => {
  return (
    <div className="min-h-screen bg-primary/5 flex flex-col justify-between">
      <div className="fixed z-40 top-0 left-0 w-full backdrop-blur-md">
        <div className="backdrop-blur-sm bg-black/40">
          <div className="flex w-full justify-between items-center gap-5 py-5 wrapper">
            <Link to="/" className="cursor-pointer">
              <img
                fetchPriority="high"
                src={logo}
                alt="logo"
                width="150"
                height="100"
                className="h-[4rem] object-contain"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-[80vh] flex flex-col gap-1 justify-center items-center text-center wrapper translate-y-[3rem]">
        <h1 className="heading-1">Thank You</h1>
        <p className="desc">Your message has been sent.</p>
        <p className="desc mb-4">We will get back to you as soon as possible.</p>
        <Link to="/" className="primary-btn w-fit">
          Back to Home
        </Link>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Thankyou;
