"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Menu = dynamic(() => import("../Menu"), { ssr: false });
import { navData } from "./nav.data";
import dynamic from "next/dynamic";
const ScrollLink = dynamic(() => import("../ScrollLink"), { ssr: false });

const Nav = () => {
  const router = usePathname();

  return (
    <nav className="w-full relative py-[2.5rem] flex justify-between items-center container px-base lg:px-lg">
      <div className="flex flex-col items-start text-white-3 text-[1.4375rem]">
        <Link href={`/`}>
          <span>Ehindero Israel (Dero)</span>
        </Link>
        <span>{router?.length < 2 ? null : router}</span>
      </div>
      <div className="hidden fixed top-[2.5rem] right-4 lg:right-[3.69rem] md:flex flex-col items-end gap-[1.275rem] text-white-3/[0.66]  group">
        {navData?.map((i, idx) =>
          i?.section ? (
            <ScrollLink
              key={idx}
              className="hover:text-white-3 cursor-pointer transition-colors duration-300 ease-in-out group "
              link={i?.link}
              label={i?.title}
            />
          ) : (
            <Link
              href={i?.link}
              target={`_blank`}
              className="hover:text-white-3 cursor-pointer transition-colors duration-300 ease-in-out group "
              key={idx}
            >
              {i?.title}
            </Link>
          )
        )}
      </div>
      <div className="w-max fixed top-[2.5rem] right-4 lg:right-[3.69rem] flex md:hidden">
        <Menu />
      </div>
    </nav>
  );
};

export default Nav;
