import { FaHeart } from "react-icons/fa";
import { FaComments } from "react-icons/fa";

function BlogDetailsCard({
  blogImage,
  blogTitle,
  blogDesc,
  category,
  date,
  likes,
  comments,
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="category-date flex justify-between text-[#84858E] px-5">
        <h3>|| {category}</h3>
        <p>{date}</p>
      </div>
      <div className="blog-image rounded-sm  cursor-pointer">
        <img
          src={blogImage}
          alt="Blog-image"
          className="rounded-md w-full h-128 object-cover"
        />
      </div>
      <div className="blog-title-likes-comment">
        <div className="blog-title text-xl font-bold text-black">
          {blogTitle}
        </div>
        <div className="blog-desc text-black">
          <p className="text-sm">{blogDesc}</p>
        </div>
        <div className="blog-likes-comments my-5 flex gap-5">
          <div className="flex justify-center items-center gap-1 text-red-500">
            <FaHeart className="w-6 h-6 cursor-pointer" />
            <p className="text-red-500">{likes}</p>
          </div>
          <div className="flex justify-center items-center gap-1 text-blue-500">
            <FaComments className="w-6 h-6 cursor-pointer" />
            <p className="text-blue-500 ">{comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsCard;
