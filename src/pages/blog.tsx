import posts from '@/config/posts';
import MainLayout from '@/layouts/MainLayout';
import { type GetStaticProps, type NextPage } from 'next';
import PropTypes from 'prop-types';
import Link from 'next/link';

interface Post {
    slug: string;
    title: string;
}

interface BlogProps {
    posts: Post[];
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
    return (
        <MainLayout customTitle="Blog">
            <h1>Blog</h1>
            <ul className="posts">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const postsData: Post[] = Object.keys(posts).map((slug) => ({
        slug,
        title: posts[slug].title,
    }));

    return {
        props: {
            posts: postsData,
        },
    };
};

Blog.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            slug: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};

export default Blog;
