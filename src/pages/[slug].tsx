import { useRouter } from 'next/router';
import MainLayout from '@/layouts/MainLayout';
import pageContent from '@/config/pageContent';
import { type NextPage } from 'next';
import { notFound } from 'next/navigation';

const CustomPages: NextPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    if (slug === '' || (Array.isArray(slug) && slug.length === 0)) {
        return <MainLayout>Cargando...</MainLayout>;
    }

    const normalizedSlug = Array.isArray(slug) ? slug[0] : slug;

    if (typeof normalizedSlug !== 'string' || !(normalizedSlug in pageContent)) {
        notFound();
    }

    const theContent = pageContent[normalizedSlug];

    return (
        <MainLayout slug={normalizedSlug}>
            <h1>{theContent.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: theContent.content }} />
        </MainLayout>
    );
};

export default CustomPages;
