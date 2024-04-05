import BannerFuncitonButton from "./BannerButton";
import BannerFuncitonImage from "./BannerImage";
import BannerFuncitonRoot from "./BannerRoot";

const Banner = {
  Root: BannerFuncitonRoot,
  Image: BannerFuncitonImage,
  Button: BannerFuncitonButton
}

const BannerContent = Banner.Root
const BannerImage = Banner.Image
const BannerButton = Banner.Button

export {
  BannerContent,
  BannerImage,
  BannerButton
}