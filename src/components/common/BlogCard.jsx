import { FaHeart } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { Link } from "react-router";

function BlogCard({ blogImage, blogTitle, blogDesc, likes, comments }) {
  return (
    <Link to={`/blogs/${1121}`}>
      <div className="grid grid-cols-4 border-b border-b-gray-300">
        <div className="blog-image col-span-1 w-full h-48 rounded-sm relative cursor-pointer">
          <img
            src={blogImage}
            alt="Blog-image"
            className="absolute inset-0 rounded-sm"
          />
        </div>
        <div className="blog-title-likes-comments col-span-3 px-5 py-3">
          <div className="blog-title text-xl font-bold text-black py-2 justify-center">
            {blogTitle}
          </div>
          <div className="blog-desc text-black">
            <p className="justify-center text-sm">{blogDesc}</p>
          </div>
          <div className="blog-likes-comments my-5 flex gap-5">
            <div className="flex justify-center items-center gap-1 text-[#84858E]">
              <FaHeart className="w-6 h-6 text-red-500" />
              <p className="text-red-500">{likes}</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-[#84858E]">
              <FaComments className="w-6 h-6 text-blue-600" />
              <p className="text-blue-600">{comments}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;