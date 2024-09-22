import { useRouter } from 'next/router';
import MainLayout from '@/layouts/MainLayout';
import { type NextPage } from 'next';
import { notFound } from 'next/navigation';
import posts from '@/config/posts';

const BlogPost: NextPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    if (!slug) {
        return <MainLayout>Cargando...</MainLayout>;
    }

    const normalizedSlug = Array.isArray(slug) ? slug[0] : slug;

    if (typeof normalizedSlug !== 'string' || !(normalizedSlug in posts)) {
        notFound();
    }

    const post = posts[normalizedSlug];

    return (
        <MainLayout slug={normalizedSlug}>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </MainLayout>
    );
};

export default BlogPost;
