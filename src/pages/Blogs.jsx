import BlogCard from "../components/common/BlogCard";
import SubHeroSection from "../components/sections/SubHeroSection";
import Wrapper from "../components/utils/Wrapper";

const blogs = [
  {
    blogImage:
      "https://flatirons.com/static/0a79ca63e3ace4bfd802a70a2d7427ae/537f5/What-is-Drupal-An-Overview-in-2025.webp",
    blogTitle: "Ty Dolla $ign - Happy birthday twin 💕 | Facebook",
    blogDesc:
      "Rapper Ty Dolla $ign, birth name Tyrone William Griffin Jr., isn't only a world about her on his social media accounts.Rapper Ty Dolla $ign, birth name Tyrone William Griffin Jr., isn't only a world about her on his social media accounts.Rapper Ty Dolla $ign, birth name Tyrone William Griffin Jr., isn't only a world about her on his social media accounts.",
    likes: 7,
    comments: 10,
  },
  {
    blogImage:
      "https://th.bing.com/th/id/OIP.A_kRjU6YaLOcLuYaEWBCZQHaEo?rs=1&pid=ImgDetMain",
    blogTitle: "Artificial intelligence (AI) | Definition, Examples, Types ...",
    blogDesc:
      "Rapper Ty Dolla $ign, birth name Tyrone William Griffin Jr., isn't only a world about her on his social media accounts.Rapper Ty Dolla $ign, birth name Tyrone William Griffin Jr., isn't only a world about her on his social media accounts.Rapper Ty Dolla $ign, birth name Tyrone William Griffin Jr., isn't only a world about her on his social media accounts.",
    likes: 15,
    comments: 5,
  },
  {
    blogImage:
      "https://miro.medium.com/v2/resize:fit:1400/1*BQZAbczBfLYtPp-6HmN0ZQ.jpeg",
    blogTitle:
      "Next.js 13: A Beginner's Guide. Next.js is a React framework used to… | by Guilherme Pompilio |",
    blogDesc:
      "Rapper Ty Dolla $ign, birth name Tyrone William Griffin Jr., isn't only a world about her on his social media accounts.Rapper Ty Dolla $ign, birth name Tyrone William Griffin Jr., isn't only a world about her on his social media accounts.Rapper Ty Dolla $ign, birth name Tyrone William Griffin Jr., isn't only a world about her on his social media accounts.",
    likes: 15,
    comments: 5,
  },
];

function Blogs() {
  return (
    <div className="all min-w-screen bg-white">
      <SubHeroSection title="Blogs Page" navigateTo="Home" />
      <div className="container  w-screen">
        <Wrapper>
          <div className="blogs-container grid grid-cols-4 gap-3 py-5">
            <div className="blogs-list col-span-3">
              <div className="lists">
                {blogs.map((blog, index) => (
                  <BlogCard
                    key={index}
                    blogImage={blog.blogImage}
                    blogTitle={blog.blogTitle}
                    blogDesc={blog.blogDesc}
                    likes={blog.likes}
                    comments={blog.comments}
                  />
                ))}
              </div>
            </div>
            <div className="blogs-filter col-span-1 p-4 rounded-md border border-gray-300">
              <input
                type="text"
                placeholder="Search ......."
                className="px-5 py-2 focus:outline-none rounded-sm bg-white border border-blue-500"
              />
              <div className="categories p-3">
                <div className="py-5 text-md font-bold text-black ">
                  Filter By Categories:
                </div>
                <div className="py-3 bg-blue-500  text-white rounded-sm px-2 mt-1 cursor-pointer">
                  Technology
                </div>
                <div className="py-3 bg-blue-500  text-white rounded-sm px-2 mt-3 cursor-pointer">
                  News
                </div>
                <div className="py-3 bg-blue-500  text-white rounded-sm px-2 mt-3 cursor-pointer">
                  Artificial intelligence
                </div>
                <div className="py-3 bg-blue-500  text-white rounded-sm px-2 mt-3 cursor-pointer">
                  Mobile development
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}

export default Blogs;
