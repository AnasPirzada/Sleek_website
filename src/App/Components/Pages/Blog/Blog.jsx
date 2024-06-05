import React from "react";
import blogimg from "../../../../assets/blogimg.svg";
const Blog = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const blogPosts = [
    {
      image: blogimg,
      date: "May 30, 2024",
      title: "London House Removals: What to Look for in a Removal Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      image: blogimg,
      date: "May 30, 2024",
      title: "London House Removals: What to Look for in a Removal Company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
  ];

  const BlogPost = ({ image, date, title, description }) => (
    <div className="shadow-md rounded-md flex flex-col justify-between sm:flex-row sm:h-auto md:flex-col lg:w-[360px] xl:w-[500px] 2xl:w-[500px]">
      <img
        src={image}
        alt={title}
        className="w-full h-auto rounded-md sm:w-[50%] lg:w-full xl:w-full 2xl:w-full"
      />
      <div className="p-4 flex flex-col justify-between">
        <div className="flex items-center gap-3">
          <img src="bi_clock.svg" alt="Clock icon" />
          <p className="text-[#000000] text-sm font-normal">{date}</p>
        </div>
        <h1 className="font-semibold text-base pt-2">{title}</h1>
        <p className="text-[#444545] pt-2">{description}</p>
        <button className="bg-[#E97B08] h-9 w-28 text-white font-medium rounded-md self-start  mt-4 sm:self-start">
          Read More
        </button>
      </div>
    </div>
  );

  return (
    <section className="px-4 md:px-12 lg:px-[135px] xl:px-[135px] 2xl:px-[135px]  flex flex-col items-center justify-center">
      <div className="text-center pt-[108px]">
        <h1 className="text-[#E97B08] text-4xl font-bold leading-[48.41px]">
          Blog’s
        </h1>
        <p className="text-base leading-[24px] pt-6">
          Join our community of savvy movers to discover expert tips, exclusive
          offers, and personalized moving solutions that ensure a smooth and
          stress-free transition to your new home!
        </p>
        <hr className="border-2 border-[#E97B08] w-28 mx-auto my-5" />
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 pt-8 justify-center">
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index}
            image={post.image}
            date={post.date}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
