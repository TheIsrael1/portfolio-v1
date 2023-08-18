import { shimmer, toBase64 } from "@/lib/Shimmer";
import Image, { StaticImageData } from "next/image";

interface ImageReelInterface {
  images: string[] | StaticImageData[];
}

const ImageReel = ({ images }: ImageReelInterface) => {
  return (
    <div className="flex flex-col md:flex-row gap-[2.9rem] flex-wrap">
      {images?.map((i, idx) => (
        <div
          className="w-[17.89163rem] max-h-[15.93006rem] relative flex-shrink-0 bg-transparent overflow-hidden"
          key={idx}
        >
          <Image
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
            src={i}
            alt=""
            objectFit="center"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageReel;
