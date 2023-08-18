import ImageReel from "@/components/ImageReel";
import { sections } from "@/folio-config";
import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { shimmer, toBase64 } from "@/lib/Shimmer";

export async function generateStaticParams() {
  return sections.map((i) => {
    slug: i?.slug;
  });
}

export const revalidate = 60;

const page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const section = sections?.find((sec) => sec.slug === slug);

  if (!section) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-between container px-base lg:px-lg">
      <section className="w-full py-[7.94rem] flex flex-col items-start ">
        <h2 className="text-white-1 font-bowbly text-[2.5rem] md:text-[3.28125rem] tracking-[0.65188rem] mb-[0.06rem]">
          {section?.title}
        </h2>
        <p className="text-[1.50081rem] md:text-[2.20081rem] font-roboto mb-[2.06rem] font-[300] leading-[2.7786rem] md:leading-[3.77869rem] text-white-1 max-w-[62.8125rem]">
          {section?.description}
        </p>
        <div className="w-full flex flex-col md:flex-row  gap-12 items-start">
          <Link href={`${section?.liveLink}`} target="_blank">
            <div className="flex flex-col gap-[1.44rem] cursor-pointer group w-[18rem]">
              <div className="relative w-full max-h-[9.25rem] bg-transparent overflow-hidden">
                <Image
                  src={section?.image}
                  alt=""
                  objectFit="cover"
                  objectPosition="center"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(700, 475)
                  )}`}
                />
              </div>
              <div className="flex items-center gap-[0.5rem] text-white-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[1.37rem] h-[1.37rem]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
                <span className="font-pt text-[1.25rem] tracking-[0.0625rem] leading-[1.5rem] group-hover:underline text-white-3">
                  open site
                </span>
              </div>
            </div>
          </Link>
          <div className="flex flex-col gap-[1.06rem] items-start font-pt">
            <h5 className="text-white-2/[0.72] font-[700] text-[0.875rem] leading-[1.568rem] tracking-[0.125rem]">
              Things I did
            </h5>
            <ul className="flex flex-col gap-[0.13rem] items-start max-w-[20rem]">
              {section?.things_i_did?.map((i, idx) => (
                <li
                  key={idx}
                  className="text-white-2/[0.72] text-[0.875rem] leading-[1.568rem] tracking-[0.125rem]"
                >
                  {i},
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-[1.06rem] items-start font-pt">
            <h5 className="text-white-2/[0.72] font-[700] text-[0.875rem] leading-[1.568rem] tracking-[0.125rem]">
              Collaborators
            </h5>
            <ul className="flex flex-col gap-[0.13rem] items-start max-w-[20rem]">
              {section?.collaborators?.map((i, idx) => (
                <li
                  key={idx}
                  className="text-white-2/[0.72] text-[0.875rem] leading-[1.568rem] tracking-[0.125rem]"
                >
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {section.sections?.map((i, idx) => (
        <section
          key={idx}
          className="w-full flex flex-col items-start gap-[2rem]"
        >
          <div className="flex flex-col items-start gap-[0.67rem]">
            <h4 className="text-white-1/[0.9] font-bowbly text-[2.28625rem] tracking-[0.34125rem]">
              {i?.title}
            </h4>
            <p className="max-w-[27.6875rem] text-white-2/[0.72] leading-[1.568rem] tracking-[0.125rem] text-[0.8125rem] font-pt">
              {i?.description}
            </p>
          </div>
          <ImageReel images={i?.images} />
          <div className="w-full flex flex-col md:flex-row gap-8 justify-between md:items-end max-w-[59.5rem]">
            <p className="max-w-[27.6875rem] text-white-2/[0.72] leading-[1.568rem] tracking-[0.125rem] text-[0.8125rem] font-pt">
              {i?.footnote}
            </p>
            <div className="flex items-center gap-[0.5rem] text-white-4 group cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[1.37rem] h-[1.37rem]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <Link href={i?.footLink} target="_blank">
                <span className="font-pt text-[1.25rem] tracking-[0.0625rem] leading-[1.5rem] group-hover:underline text-white-3">
                  {i?.footLinkLabel}
                </span>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};

export default page;
