import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className='h-auto w-full'>
      <Image
        src='/images/pattern-bg-desktop.png'
        alt='blue pattern background image'
        width={1440}
        height={280}
        className='h-[280px] w-full'
      />
    </header>
  );
};

export default Header;
