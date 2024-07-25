import React from 'react';
import { useNavigate } from 'react-router-dom';
import NewImage from '../../../../../public/18_jImage.jpg';
import JImage from '../../../../../public/21-jImage.jpg';
import blogimg from '../../../../../public/imgf.jpg';
const Blog = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const blogPosts = [
    {
      image: NewImage,
      date: 'JUL 18, 2024',
      title:
        'Common Moving Mistakes and How to Avoid Them | Man and Van London',
      description:
        'Moving can be a daunting task, and it’s easy to make mistakes that can add unnecessary stress to the process Here are some common moving mistakes and tips on how to avoid them, ensuring a smooth and hassle-free move with the best man with a van in London UK.',
      route: '/blogDetails1',
    },
    {
      image: JImage,
      date: '21 JUN, 2024',
      title: 'How a Man and Van Service in London Can Simplify Your Life',
      description:
        'A man and van. Sounds simple, doesn’t it? Yet, this basic phrase embodies a service that goes far beyond the simplicity of its title. What if I told you that a Man and Van London service offers more than just a vehicle and a driver? Here, We’ve gathered various ways a Man and Van hire London service can simplify your life and assist with even the most daunting tasks. Brace yourself for the versatility this service brings to the table.',
      route: '/blogDetails2',
    },
    {
      image: blogimg,
      date: 'March 5, 2024',
      title: 'London House Removals: What to Look for in a Removal Company',
      description:
        'Are you planning a move in the near future? London House Removals can be daunting, especially when dealing with the hustle and bustle of the UK’s capital. In this blog post, we’ll explore what to look for in a removal company, discuss the importance of storage solutions, and provide top tips to help you make your move as smooth as possible. So, grab a cuppa and let’s dive in!',
      route: '/blogDetails3',
    },
  ];

  const BlogPost = ({ image, date, title, description, route }) => (
    <div className='shadow-md rounded-md flex-col justify-between sm:flex-row sm:h-auto md:flex-col lg:w-[360px] xl:w-[500px] 2xl:w-[500px]'>
      <img
        src={image}
        alt={title}
        className='w-full h-auto rounded-md sm:w-[50%] lg:w-full xl:w-full 2xl:w-full'
      />
      <div className='p-4 flex flex-col justify-between'>
        <div className='flex items-center gap-3'>
          <img src='bi_clock.svg' alt='Clock icon' />
          <p className='text-[#000000] text-sm font-normal'>{date}</p>
        </div>
        <h1 className='font-semibold text-base pt-2'>{title}</h1>
        <p className='text-[#444545] pt-2'>{description}</p>

        <button
          onClick={() => navigate(route)}
          className='bg-[#E97B08] h-9 w-28 text-white font-medium rounded-md self-start  mt-4 sm:self-start inline-block text-center'
        >
          Read More
        </button>
      </div>
    </div>
  );

  return (
    <section className='my-10 px-4 md:px-12 lg:px-[135px] xl:px-[135px] 2xl:px-[135px]  flex flex-col items-center justify-center'>
      <div className='text-center pt-16'>
        <h1 className='text-[#E97B08] text-4xl font-bold leading-[48.41px]'>
          Blog’s
        </h1>
        <p className='text-base leading-[24px] pt-6'>
          Join our community of savvy movers to discover expert tips, exclusive
          offers, and personalized moving solutions that ensure a smooth and
          stress-free transition to your new home!
        </p>
        <hr className='border-2 border-[#E97B08] w-28 mx-auto my-5' />
      </div>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 pt-8 justify-center'>
        {blogPosts.map((post, index) => (
          <BlogPost
            image={post.image}
            date={post.date}
            title={post.title}
            description={post.description}
            route={post.route}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
