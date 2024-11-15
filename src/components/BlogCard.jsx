// components/BlogCard.js
import Link from 'next/link';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-stone-200 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-800 mb-4">{post.excerpt}</p>
      <p className="text-gray-800 text-sm mb-4">Published on {new Date(post.date).toLocaleDateString()}</p>
      <Link className="text-blue-600 hover:underline" href={`/blog/${post.slug}`}>
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
