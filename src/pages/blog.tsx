import posts from '@/config/posts';
import MainLayout from '@/layouts/MainLayout';
import { type NextPage } from 'next';
import Link from 'next/link';

const Blog: NextPage = () => {
    return (
        <MainLayout customTitle="Blog">
            <h1>Blog</h1>
            <ul className="posts">
                {Object.keys(posts).map((slug) => (
                    <li key={slug}>
                        <Link href={`/blog/${slug}`}>{posts[slug].title}</Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
};

export default Blog;
