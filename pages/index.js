import { NextSeo } from 'next-seo';
import Main from '../src/components/Layout/Main';

export default function Home() {
  return (
    <>
      <NextSeo title='Home' />
      <Main />
    </>
  );
}
