import { sections } from "@/folio-config";
import Image from "next/image";
import Link from "next/link";

// TODO: move [slug] to /post/[slug] so that we can access other routes on /x later

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between container px-base lg:px-lg">
      <section className="w-full py-[8rem] md:py-[14.19rem] flex flex-col items-start ">
        <h2 className="text-white-1 font-bowbly text-[2.5rem] md:text-[3.28125rem] tracking-[0.65188rem] mb-[0.06rem]">
          software enginner
        </h2>
        <p className="text-[1.7rem] md:text-[2.70081rem] font-roboto mb-[2.06rem] font-[300] leading-[2.7rem] md:leading-[3.77869rem] text-white-1 max-w-[62.8125rem]">
          based in Ibadan, Nigeria. I employ my software engineering skills to
          create user-friendly software that exceeds expectations in
          collaboration with teams and clients to deliver impactful results.
        </p>
        <p className="max-w-[24.625rem] text-white-2/[0.72] font-pt text-[0.875rem] leading-[1.568rem] tracking-[0.125rem]">
          Currently availabe for a full time frontend engineering role.
        </p>
      </section>
      <section className="w-full flex flex-col items-start gap-[4.31rem]">
        <div className="flex flex-col items-start gap-[0.67rem]">
          <h4 className="text-white-1/[0.9] font-bowbly text-[2.28625rem] tracking-[0.34125rem]">
            products
          </h4>
          <p className="max-w-[27.6875rem] text-white-2/[0.72] leading-[1.568rem] tracking-[0.125rem] text-[0.8125rem] font-pt">
            I listed out impressive products I have bootstraped and contributed
            to.
          </p>
        </div>
        <div className="w-full flex flex-col gap-[5.5rem]">
          {sections?.map((i, idx) => (
            <div
              key={idx}
              className="w-full  flex flex-col md:flex-row gap-[1.5rem] justify-between max-w-[59.5rem]"
            >
              <div className="flex flex-col md:flex-row items-start gap-[2.91rem]">
                <div className="relative w-[10.19806rem] max-h-[12.84956rem] flex-shrink-0 bg-trasparent overflow-hidden">
                  <Image
                    src={i?.image}
                    alt=""
                    // fill={true}
                    objectFit="cover"
                    className="bg-left-top"
                  />
                </div>
                <div className="flex flex-col gap-[0.99rem] items-start">
                  <h5 className="text-white-1/[0.9] font-bowbly text-[1.28813rem] tracking-[0.26188rem]">
                    {i?.title}
                  </h5>
                  <p className="max-w-[14.58319rem] text-white-2/[0.72] leading-[1.18788rem] tracking-[0.0625rem] text-[0.66288rem]">
                    {i?.description}
                  </p>
                </div>
              </div>
              <div className="flex items-end md:justify-end gap-[0.31rem]  cursor-pointer h-max mt-auto group text-white-4 ">
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
                <Link href={`/${i?.slug}`}>
                  <span className="font-pt text-[1.25rem] tracking-[0.0625rem] leading-[1.5rem] group-hover:underline text-white-3">
                    see showcase
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
