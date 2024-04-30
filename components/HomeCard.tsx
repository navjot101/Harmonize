'use client';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      onClick={handleClick}
    >

    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-black transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-blue-600 transition-all duration-300 group-hover:bg-blue-600">
            <div >
            <Image src={img} alt="meeting" width={27} height={27} />
            </div>
            </span>

            


            <div
                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h1>{title}</h1>
                <p className="text-lg font-normal"></p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
                <p>
                    <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">{description}
                        &rarr;
                    </a>
                </p>
            </div>
        </div>
    </div>


    </section>
  );
};

export default HomeCard;
