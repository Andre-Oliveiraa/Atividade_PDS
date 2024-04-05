import Image from "next/image"

interface BannerFuncitonImageProps {
  src: string,
  className: string 
}

export default function BannerFuncitonImage({ src, className }: BannerFuncitonImageProps) {
  return (
    <Image
      width={100}
      height={100}
      alt="Null"
      src={src}
      className={`${className}`}
    />
  )
}