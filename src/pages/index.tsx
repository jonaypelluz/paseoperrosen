import Header from '@/components/header';
import MainLayout from '@/layouts/MainLayout';
import { type NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <MainLayout header={<Header locationName="..." />}>
            <h1>paseoperrosen.com</h1>
        </MainLayout>
    );
};

export default Home;
