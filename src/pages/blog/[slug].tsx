import PropTypes from 'prop-types';
import MainLayout from '@/layouts/MainLayout';
import { type NextPage, type GetStaticPaths, type GetStaticProps } from 'next';
import posts from '@/config/posts';
import { notFound } from 'next/navigation';

interface BlogPostProps {
    content: {
        title: string;
        content: string;
    };
    slug: string;
}

const BlogPost: NextPage<BlogPostProps> = ({ content, slug }) => {
    if (
        undefined === content ||
        content === null ||
        content.title === '' ||
        content.content === ''
    ) {
        notFound();
    }

    return (
        <MainLayout slug={slug}>
            <h1>{content.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content.content }} />
        </MainLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.keys(posts).map((slug) => ({
        params: { slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };
    const content = posts[slug];

    if (undefined === content || content === null) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            content,
            slug,
        },
    };
};

BlogPost.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
    slug: PropTypes.string.isRequired,
};

export default BlogPost;
