import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col'>
      <div>
        <Image
          src='/images/pattern-bg-desktop.png'
          alt='blue pattern background image'
        />
      </div>
    </main>
  );
}
