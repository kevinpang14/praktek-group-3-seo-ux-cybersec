import React from "react";
import Header from "../Components/Header";
import SectionTitle from "../Components/SectionTitle";
import MainBlogCard from "../Components/MainBlogCard";
import BlogCard from "../Components/BlogCard";
import BlogImage from "../assets/img/Rectangle25-2.jpg";
import BlogProfile from "../assets/img/Ellipse4-1.jpg";
import HelmetComponent from "../Components/Helmet";

const Blogs = () => {
  const blogData = [
    {
      image: BlogImage,
      title: "Top Trends in Business Growth",
      imageProfile: BlogProfile,
      name: "Ranold Jeff",
      date: "2023-01-15",
      keywords: ["business", "trends", "growth"],
    },
    {
      image: BlogImage,
      title: "Building a Sustainable Startup",
      imageProfile: BlogProfile,
      name: "Martha Kent",
      date: "2023-03-08",
      keywords: ["startup", "sustainability", "business"],
    },
    {
      image: BlogImage,
      title: "Tips for Effective Marketing Strategies",
      imageProfile: BlogProfile,
      name: "Ranold Jeff",
      date: "2023-04-12",
      keywords: ["marketing", "strategies", "business tips"],
    },
    {
      image: BlogImage,
      title: "Mastering the Art of Networking",
      imageProfile: BlogProfile,
      name: "Alice Morgan",
      date: "2023-05-20",
      keywords: ["networking", "business connections", "growth"],
    },
    {
      image: BlogImage,
      title: "How to Lead a Remote Team",
      imageProfile: BlogProfile,
      name: "John Doe",
      date: "2023-06-02",
      keywords: ["remote work", "leadership", "team management"],
    },
    {
      image: BlogImage,
      title: "Investment Strategies for 2023",
      imageProfile: BlogProfile,
      name: "Ranold Jeff",
      date: "2023-07-22",
      keywords: ["investment", "finance", "business growth"],
    },
    {
      image: BlogImage,
      title: "Secrets to High Employee Engagement",
      imageProfile: BlogProfile,
      name: "Martha Kent",
      date: "2023-08-17",
      keywords: ["employee engagement", "management", "HR"],
    },
    {
      image: BlogImage,
      title: "Effective Time Management for CEOs",
      imageProfile: BlogProfile,
      name: "John Doe",
      date: "2023-09-10",
      keywords: ["time management", "CEO tips", "productivity"],
    },
    {
      image: BlogImage,
      title: "The Most Popular Business Trends of 2023",
      imageProfile: BlogProfile,
      name: "Alice Morgan",
      date: "2023-10-05",
      keywords: ["trends", "business", "innovation"],
    },
  ];
  return (
    <>
      <Header breadcrumb={"Blogs"} />
      {/* Helmet START*/}
      {blogData.map((item, index) => (
        <HelmetComponent
          key={index}
          title={item.title}
          description={item.description}
          keywords={item.keywords}
          author={item.author}
          date={item.date}
        />
      ))}
      {/* Helmet END*/}
      <div className="flex flex-col items-center justify-center mt-20">
        <SectionTitle
          sectionTitle={"Latest Blogs"}
          breadcrumb={"Our Blogs"}
          position="center"
        />
        <div className="flex mx-auto justify-center">
          <div>
            <MainBlogCard
              cardImage={BlogImage}
              cardTitle="The most popular business of the year"
              cardDate="12th June 2023"
              authorName="Ranold Jeff."
              authorImage={BlogProfile}
              readTime="2 Min Read"
              direction="col"
            />
          </div>
          <div>
            <div>
              <MainBlogCard
                cardImage={BlogImage}
                cardTitle="The most popular business of the year"
                cardDate="12th June 2023"
                authorName="Ranold Jeff."
                authorImage={BlogProfile}
                readTime="2 Min Read"
                direction="row"
              />
            </div>
            <div>
              <MainBlogCard
                cardImage={BlogImage}
                cardTitle="The most popular business of the year"
                cardDate="12th June 2023"
                authorName="Ranold Jeff."
                authorImage={BlogProfile}
                readTime="2 Min Read"
                direction="row"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-20 bg-secondary pt-24">
        <SectionTitle sectionTitle={"Latest Blogs"} breadcrumb={"Our Blogs"} />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
          {blogData.map((item, index) => (
            <div key={index}>
              <BlogCard
                image={item.image}
                title={item.title}
                imageProfile={item.imageProfile}
                name={item.name}
                date={item.date}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
