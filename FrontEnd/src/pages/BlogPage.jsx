import Nav from "../components/nav/Navbar";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";
const BlogPage = () => {
  const {id} = useParams()
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


    let singleBlogData = blogData.filter(blog => blog.id == id)
    singleBlogData = singleBlogData[0]
  
  return (
    <div>
      <Nav />
      <div className="blog-container px-[10%] py-[4%]">
        <h1 className="text-4xl mt-3 mb-5">{singleBlogData.blog_title}</h1>
        <img className="my-5 h-64 object-cover w-full" src={singleBlogData.blog_image} alt="" />
        <p>{singleBlogData.blog_content}</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
