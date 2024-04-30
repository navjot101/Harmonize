import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-[264px] right-0 z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
    <div className="flex justify-between items-center gap-5">
        <div className="flex justify-end items-center flex-grow"> {/* Utilize flex-grow to push UserButton to the right */}
          <SignedIn>
            <UserButton afterSignOutUrl="/sign-in"  />
          </SignedIn>
        </div>
        
        {/* MobileNav component */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
