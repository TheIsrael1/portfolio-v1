import { sections } from "@/folio-config";
import { shimmer, toBase64 } from "@/lib/Shimmer";
import Image from "next/image";
import Link from "next/link";
import deroPicture from "@/assets/deroAvatar.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between container max-w-[1024px]  px-base lg:px-lg">
      <section className="w-full py-[3.5rem] md:pb-[11.56rem] flex flex-col gap-[2.88rem] items-start ">
        <div className="w-[11.3rem] h-[12.995rem] bg-slate-300 relative">
          <Image
            src={deroPicture}
            alt=""
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            objectFit="cover"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="flex flex-col gap-[1.56rem]">
          <h2 className="text-white-1 font-bowbly text-[2.5rem] md:text-[3.28125rem] tracking-[0.65188rem]">
            software enginner
          </h2>
          <p className="text-[1.2rem] md:text-[2rem] font-roboto font-[300] leading-[1.7rem] md:leading-[3.2rem] text-white-1 max-w-[62.8125rem]">
            With 4 years + experience is software engineering, I collaborate
            with teams and clients to develop user friendly software that
            scales.
          </p>
          <div className="flex items-center flex-wrap gap-4 md:gap-[1.62rem]">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9997 27.4211C21.9997 27.6864 21.8944 27.9407 21.7068 28.1282C21.5193 28.3158 21.265 28.4211 20.9997 28.4211H2.99974C2.73452 28.4211 2.48017 28.3158 2.29263 28.1282C2.1051 27.9407 1.99974 27.6864 1.99974 27.4211C1.99974 27.1559 2.1051 26.9016 2.29263 26.714C2.48017 26.5265 2.73452 26.4211 2.99974 26.4211H20.9997C21.265 26.4211 21.5193 26.5265 21.7068 26.714C21.8944 26.9016 21.9997 27.1559 21.9997 27.4211ZM30.9822 12.0649C30.9561 12.2041 30.9006 12.3361 30.8196 12.4523C30.7386 12.5684 30.6338 12.666 30.5122 12.7386L12.086 23.7386C11.3179 24.1891 10.4439 24.4272 9.55349 24.4286C8.28513 24.4272 7.06527 23.9411 6.14349 23.0699L6.12849 23.0549L1.62474 18.6461C1.38645 18.4199 1.20759 18.1383 1.10398 17.8265C1.00036 17.5146 0.975184 17.1821 1.03067 16.8582C1.08616 16.5343 1.2206 16.229 1.4221 15.9695C1.62361 15.7099 1.88597 15.504 2.18599 15.3699L2.56099 15.1861C2.79781 15.0699 3.07098 15.0519 3.32099 15.1361L6.85349 16.3286L9.37474 14.8036L6.64599 12.1549C6.40059 11.9288 6.21565 11.6449 6.10803 11.3291C6.0004 11.0132 5.97351 10.6755 6.02979 10.3466C6.08608 10.0177 6.22376 9.70814 6.43028 9.44606C6.63681 9.18399 6.90562 8.97775 7.21224 8.84614L7.25224 8.82989L8.14599 8.49114C8.37133 8.40711 8.6194 8.40711 8.84474 8.49114L15.5872 10.9686L22.0335 7.12114C23.0608 6.50975 24.2737 6.28849 25.4507 6.49781C26.6277 6.70713 27.69 7.33305 28.4435 8.26114L28.4585 8.27989L30.7885 11.2661C30.8755 11.3779 30.9378 11.507 30.9712 11.6447C31.0046 11.7824 31.0084 11.9256 30.9822 12.0649ZM28.5147 11.6024L26.8897 9.51864C26.4375 8.96534 25.8017 8.59268 25.0979 8.46835C24.3942 8.34403 23.6692 8.4763 23.0547 8.84114L16.2047 12.9311C16.0764 13.0072 15.9329 13.0538 15.7844 13.0677C15.6359 13.0815 15.4861 13.0622 15.346 13.0111L8.49974 10.4936L7.99974 10.6849L8.02599 10.7099L11.696 14.2711C11.8056 14.3776 11.8893 14.5078 11.9408 14.6517C11.9922 14.7957 12.01 14.9494 11.9927 15.1013C11.9755 15.2531 11.9236 15.399 11.8412 15.5277C11.7588 15.6564 11.648 15.7645 11.5172 15.8436L7.49099 18.2799C7.36644 18.3551 7.22697 18.4023 7.08232 18.418C6.93767 18.4338 6.79132 18.4178 6.65349 18.3711L3.06974 17.1624L3.04599 17.1749L2.99974 17.1961C3.00576 17.2004 3.01122 17.2055 3.01599 17.2111L7.51599 21.6186C7.98562 22.06 8.5856 22.3372 9.22606 22.4089C9.86651 22.4805 10.5129 22.3427 11.0685 22.0161L28.5147 11.6024Z"
                fill="white"
              />
            </svg>
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 17.4211C26.7348 17.4211 26.4804 17.5264 26.2929 17.714C26.1054 17.9015 26 18.1559 26 18.4211C26 19.0777 25.8707 19.7279 25.6194 20.3345C25.3681 20.9411 24.9998 21.4923 24.5355 21.9566C24.0712 22.4209 23.52 22.7892 22.9134 23.0405C22.3068 23.2918 21.6566 23.4211 21 23.4211C19.5229 23.4202 18.0979 23.9666 17 24.9548V16.4211H21C21.2652 16.4211 21.5196 16.3157 21.7071 16.1282C21.8946 15.9406 22 15.6863 22 15.4211C22 15.1559 21.8946 14.9015 21.7071 14.714C21.5196 14.5264 21.2652 14.4211 21 14.4211H17V11.2961C17.9427 11.0527 18.7642 10.4738 19.3106 9.66807C19.857 8.86229 20.0908 7.88489 19.9681 6.91908C19.8454 5.95326 19.3747 5.06535 18.6442 4.42176C17.9137 3.77817 16.9736 3.4231 16 3.4231C15.0264 3.4231 14.0863 3.77817 13.3558 4.42176C12.6253 5.06535 12.1546 5.95326 12.0319 6.91908C11.9092 7.88489 12.143 8.86229 12.6894 9.66807C13.2358 10.4738 14.0573 11.0527 15 11.2961V14.4211H11C10.7348 14.4211 10.4804 14.5264 10.2929 14.714C10.1054 14.9015 10 15.1559 10 15.4211C10 15.6863 10.1054 15.9406 10.2929 16.1282C10.4804 16.3157 10.7348 16.4211 11 16.4211H15V24.9548C13.9021 23.9666 12.4771 23.4202 11 23.4211C9.67392 23.4211 8.40215 22.8943 7.46447 21.9566C6.52678 21.0189 6 19.7472 6 18.4211C6 18.1559 5.89464 17.9015 5.70711 17.714C5.51957 17.5264 5.26522 17.4211 5 17.4211C4.73478 17.4211 4.48043 17.5264 4.29289 17.714C4.10536 17.9015 4 18.1559 4 18.4211C4.00199 20.277 4.74012 22.0563 6.05245 23.3686C7.36477 24.681 9.14409 25.4191 11 25.4211C12.0609 25.4211 13.0783 25.8425 13.8284 26.5927C14.5786 27.3428 15 28.3602 15 29.4211C15 29.6863 15.1054 29.9407 15.2929 30.1282C15.4804 30.3157 15.7348 30.4211 16 30.4211C16.2652 30.4211 16.5196 30.3157 16.7071 30.1282C16.8946 29.9407 17 29.6863 17 29.4211C17 28.3602 17.4214 27.3428 18.1716 26.5927C18.9217 25.8425 19.9391 25.4211 21 25.4211C22.8559 25.4191 24.6352 24.681 25.9476 23.3686C27.2599 22.0563 27.998 20.277 28 18.4211C28 18.1559 27.8946 17.9015 27.7071 17.714C27.5196 17.5264 27.2652 17.4211 27 17.4211ZM14 7.42108C14 7.02552 14.1173 6.63884 14.3371 6.30994C14.5568 5.98104 14.8692 5.7247 15.2346 5.57332C15.6001 5.42194 16.0022 5.38234 16.3902 5.45951C16.7781 5.53668 17.1345 5.72716 17.4142 6.00687C17.6939 6.28657 17.8844 6.64294 17.9616 7.0309C18.0387 7.41886 17.9991 7.82099 17.8478 8.18645C17.6964 8.5519 17.44 8.86426 17.1111 9.08402C16.7822 9.30378 16.3956 9.42108 16 9.42108C15.4696 9.42108 14.9609 9.21037 14.5858 8.83529C14.2107 8.46022 14 7.95151 14 7.42108Z"
                fill="white"
              />
            </svg>

            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.615 6.63229C28.4952 6.53895 28.3557 6.47412 28.2072 6.44272C28.0586 6.41131 27.9048 6.41416 27.7575 6.45104L20.1162 8.36104L12.4475 4.52604C12.2338 4.41946 11.9891 4.39286 11.7575 4.45104L3.7575 6.45104C3.54116 6.50511 3.3491 6.62995 3.21185 6.8057C3.0746 6.98146 3.00003 7.19804 3 7.42104V25.421C3.00002 25.573 3.03467 25.7229 3.10132 25.8595C3.16797 25.996 3.26486 26.1156 3.38463 26.2091C3.50441 26.3026 3.64392 26.3676 3.79256 26.3991C3.94121 26.4307 4.09508 26.4279 4.2425 26.391L11.8837 24.481L19.5525 28.316C19.6917 28.3847 19.8448 28.4206 20 28.421C20.0818 28.421 20.1632 28.4109 20.2425 28.391L28.2425 26.391C28.4588 26.337 28.6509 26.2121 28.7881 26.0364C28.9254 25.8606 29 25.644 29 25.421V7.42104C29 7.26894 28.9654 7.11885 28.8987 6.98217C28.8319 6.84549 28.7349 6.72583 28.615 6.63229ZM13 7.03854L19 10.0385V25.8035L13 22.8035V7.03854ZM5 8.20229L11 6.70229V22.6398L5 24.1398V8.20229ZM27 24.6398L21 26.1398V10.2023L27 8.70229V24.6398Z"
                fill="white"
              />
            </svg>
            <span className="text-[1.2rem] md:text-[1.7rem] font-roboto font-[300] leading-[2.7rem] md:leading-[3.2rem] text-white-1">
              I live in Ibadan, Nigeria
            </span>
          </div>
          <p className="max-w-[24.625rem] text-white-2/[0.72] font-pt text-[0.875rem] leading-[1.568rem] tracking-[0.125rem]">
            Currently available for a full time frontend engineering role.
          </p>
        </div>
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
                <div className="relative w-full md:w-[24.19806rem] max-h-[24.84956rem] flex-shrink-0 bg-trasparent overflow-hidden">
                  <Image
                    src={i?.image}
                    alt=" "
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(700, 475)
                    )}`}
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
                  <span className="font-pt text-[1.25rem] tracking-[0.0625rem] whitespace-nowrap  leading-[1.5rem] group-hover:underline text-white-3">
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
