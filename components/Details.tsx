import { geoData } from '@/lib/types';
import React from 'react';

export type DetailsProps = {
  geoData: geoData;
};

const Details: React.FC<DetailsProps> = ({ geoData }) => {
  const addressData = [
    {
      title: 'ip address',
      content: geoData?.ip,
    },
    {
      title: 'location',
      content: `${geoData?.location.city}, ${geoData?.location.region}`,
    },
    {
      title: 'timezone',
      content: geoData?.location.timezone,
    },
    {
      title: 'isp',
      content: geoData?.isp,
    },
  ];

  return (
    <div className='absolute left-[50%] top-[200px] z-[999] flex min-w-[300px] translate-x-[-50%] flex-col justify-center rounded-2xl bg-white lg:min-w-[1000px] lg:flex-row'>
      <div className='flex flex-col gap-[24px] p-[24px] lg:flex-row lg:gap-0 lg:p-[32px]'>
        {addressData.map((address) => (
          <div
            key={address.title}
            className='lg:border-gray-light flex flex-col items-center gap-[7px] text-center lg:items-start lg:gap-[13px] lg:border-r lg:px-[32px] lg:text-left lg:last:border-none'
          >
            <span className='text-gray-light text-[10px] font-bold uppercase lg:font-[12px]'>
              {address.title}
            </span>
            <span className='text-gray-dark text-[20px] lg:text-[26px]'>
              {address.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
