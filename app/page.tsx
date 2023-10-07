import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import SearchBox from '@/components/SearchBox';

const DynamicMap = dynamic(() => import('../components/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className='relative flex h-screen flex-col'>
      <Header />
      <DynamicMap />
      <SearchBox />
    </main>
  );
}
