import Content from '@/components/content';
import Header from '@/components/header';
import MainLayout from '@/layouts/MainLayout';
import { type NextPage } from 'next';

const Vacarisses: NextPage = () => {
    return (
        <MainLayout header={<Header locationName="Vacarisses" />}>
            <Content />
        </MainLayout>
    );
};

export default Vacarisses;
