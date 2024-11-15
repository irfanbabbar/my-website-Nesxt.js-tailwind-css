// pages/blog.js
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';
import Link from 'next/link';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Next.js',
    excerpt: 'Learn the basics of Next.js and how it can help your React applications.',
    date: '2024-04-10',
    slug: 'understanding-nextjs',
  },
  {
    id: 2,
    title: 'Tailwind CSS Tips',
    excerpt: 'Enhance your UI development with these Tailwind CSS tips and tricks.',
    date: '2024-05-05',
    slug: 'tailwind-css-tips',
  },
  {
    id: 3,
    title: 'Typesrepit Tips',
    excerpt: 'Learn the basics of Typesrepit and how it can help your Next applications.',
    date: '2024-04-10',
    slug: 'Typesrepit-tips',
  },
  {
    id: 4,
    title: 'Java Tips',
    excerpt: 'Learn the basics of Java and how it can help your Next applications.',
    date: '2024-04-10',
    slug: 'Java-tips',
  },
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mt-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
