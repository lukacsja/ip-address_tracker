import Image from 'next/image';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('../components/Map'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className='flex flex-col'>
      <div>
        <Image
          src='/images/pattern-bg-desktop.png'
          alt='blue pattern background image'
          width={1440}
          height={280}
        />
      </div>
      <DynamicMap />
    </main>
  );
}
