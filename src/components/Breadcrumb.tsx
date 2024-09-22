import { type FC } from 'react';
import pageContent from '@/config/pageContent';
import posts from '@/config/posts';
import Link from 'next/link';

interface BreadcrumbProps {
    slug?: string;
    customTitle?: string;
}

const Breadcrumb: FC<BreadcrumbProps> = ({ slug, customTitle }) => {
    let title: string | null = null;

    if (slug !== undefined) {
        const pageTitle = pageContent[slug]?.title;
        const postTitle = posts[slug]?.title;

        if (pageTitle !== null && pageTitle !== '') {
            title = pageTitle;
        } else if (postTitle !== null && postTitle !== '') {
            title = postTitle;
        }
    }

    if (title === null && customTitle != null && customTitle !== '') {
        title = customTitle;
    }

    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                {slug != null && posts[slug] != null && (
                    <li>
                        <Link href="/blog/">Blog</Link>
                    </li>
                )}
                {title != null && title !== '' && <li aria-current="page">{title}</li>}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
