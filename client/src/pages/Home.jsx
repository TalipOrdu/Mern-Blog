import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/post/getPosts`);
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col p-24 gap-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl sm:p-6">
          Welcome to My Blog
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm p-4 pt-0">
          we provide a diverse range of blog articles that cater to various
          interests and industries. Each article is carefully crafted by our
          community of writers, offering unique perspectives, well-researched
          information, and practical advice.
        </p>
        <Link
          to="/search"
          className="self-start text-xs sm:text-sm text-teal-500 font-bold hover:underline p-4"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 max-w-4xl mx-auto rounded bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      <div className="max-w-6xl mx-auto flex flex-col gap-8 py-6">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6 ">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-5 items-center justify-center">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to="/search"
              className="text-lg text-teal-500 hover:underline text-center "
            >
              View to All Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
