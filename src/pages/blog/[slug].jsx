// pages/blog/[slug].js
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Understanding Next.js',
    content: 'Detailed content about Next.js...',
    date: '2024-04-10',
    slug: 'understanding-nextjs',
  },
  {
    id: 2,
    title: 'Tailwind CSS Tips',
    content: 'Detailed content about Tailwind CSS...',
    date: '2024-05-05',
    slug: 'tailwind-css-tips',
  },
  {
    id: 3,
    title: 'Typesrepit Tips',
    content: 'Detailed content about typesrepit...',
    date: '2024-05-05',
    slug: 'Typesrepit-tips',
  },
  {
    id: 4,
    title: 'Java Tips',
    content: 'Detailed content about java...',
    date: '2024-05-05',
    slug: 'Java-tips',
  },

  // Add more blog posts as needed
];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 mt-10">
          <h2 className="text-3xl font-semibold text-center">Post Not Found</h2>
          <p className="text-center mt-4">Sorry, the blog post you are looking for does not exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12 mt-10">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-6">Published on {new Date(post.date).toLocaleDateString()}</p>
        <div className="prose prose-lg">
          {/* In a real application, use Markdown or a CMS to render content */}
          <p>{post.content}</p>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
