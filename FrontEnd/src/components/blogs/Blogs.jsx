import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
const Blogs = () => {
  const blogData = [
    {
      id: "1",
      blog_title: "Best Marketing Methods",
      blog_content: "ABCD",
      blog_image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      blog_post_date: "9/11/2023",
      blog_category: "Marketing",
    },
    {
      id: "2",
      blog_title: "How to get most Sales",
      blog_content: "ABCD",
      blog_image: "https://images.unsplash.com/photo-1560250056-07ba64664864",
      blog_post_date: "10/20/2023",
      blog_category: "Design",
    },
    {
      id: "3",
      blog_title: "How to get most Sales",
      blog_content: "ABCD",
      blog_image: "https://images.unsplash.com/photo-1560250056-07ba64664864",
      blog_post_date: "10/20/2023",
      blog_category: "Marketing",
    },
    {
      id: "4",
      blog_title: "Why Website is too Slow",
      blog_content: "ABCD",
      blog_image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      blog_post_date: "8/28/2023",
      blog_category: "Web Development",
    },
  ];

  let homePageBlogs = blogData.slice(-3)

  return (
    <div className=' px-[10%] py-[100px] bg-[#1a1f25] font-poppins text-white'>
      <div className='title text-center p-10'>
        <h1 className='text-4xl'>
          Latest <span className='text-[#ff4151]'>Blogs</span>
        </h1>
      </div>
      <div className='card-container gap-3 grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center'>
        {homePageBlogs.map((blog) => (
          <Link to={`/blog/${blog.id}`}>
            <BlogCard key={blog.id} blogData={blog} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
