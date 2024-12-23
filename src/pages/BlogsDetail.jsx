import React from "react";
import Header from "../components/Website/Header";
import Footer from "../components/Website/Footer";
import PageBanner from "../components/Website/PageBanner";
import { blogs } from "../data/blogs";
import { Navigate, useParams } from "react-router-dom";
import GetInTouch from "../components/GetInTouch";
import CallToAction from "../components/CallToAction";

const BlogsDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <Navigate to="/blogs" />;
  }
  return (
    <>
      <Header />
      <PageBanner title=" " banner={blog.image} />
      <div className="py-[5rem] wrapper">
        <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }}></div>
      </div>
      <CallToAction />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default BlogsDetail;
