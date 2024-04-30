'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky top-0 flex flex-col justify-between h-screen bg-black p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
      <Link href="/" className="flex items-center gap-1 mb-10 ">
        <Image
          src="/icons/video.svg"
          width={32}
          height={32}
          alt="harmonize logo"
          className="max-sm:size-10"
        />
        <p className="m-4 text-[26px] font-extrabold text-white max-sm:hidden">
          Harmonize
        </p>
       </Link>


        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (

            
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-4 items-center p-4 rounded-lg justify-start',
                {
                  'bg-blue-1': isActive,
                  'text-white': isActive,
                }
              )}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
        </div>
    </section>
  );
};

export default Sidebar;
