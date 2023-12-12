import Content from '@/components/content';
import Header from '@/components/header';
import MainLayout from '@/layouts/MainLayout';
import { type NextPage } from 'next';

const Vacarisses: NextPage = () => {
  return (
    <MainLayout header={<Header />}>
      <Content />
    </MainLayout>
  );
};

export default Vacarisses;
