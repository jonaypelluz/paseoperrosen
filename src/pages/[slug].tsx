import PropTypes from 'prop-types';
import MainLayout from '@/layouts/MainLayout';
import pageContent from '@/config/pageContent';
import { type NextPage, type GetStaticPaths, type GetStaticProps } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
    content: {
        title: string;
        content: string;
    };
    slug: string;
}

const CustomPages: NextPage<PageProps> = ({ content, slug }) => {
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
    const paths = Object.keys(pageContent).map((slug) => ({
        params: { slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string };
    const content = pageContent[slug];

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

CustomPages.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
    slug: PropTypes.string.isRequired,
};

export default CustomPages;
