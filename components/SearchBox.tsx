import Image from 'next/image';
import React from 'react';

const SearchBox = () => {
  return (
    <div className='absolute left-[50%] top-[33px] flex h-[58px] w-[350px] translate-x-[-50%] overflow-hidden rounded-2xl'>
      <input
        type='search'
        className='h-full w-full px-[24px] py-[18px] focus:outline-none'
        placeholder='Search for any IP address or domain'
      />
      <button
        type='submit'
        className='hover:bg-gray-medium flex h-full w-[58px] items-center justify-center bg-black'
      >
        <Image
          src='/icons/icon-arrow.svg'
          alt='arrow icon to the right'
          width={12}
          height={12}
          className='h-auto w-auto'
        />
      </button>
    </div>
  );
};

export default SearchBox;
