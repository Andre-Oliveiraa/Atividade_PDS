import BannerFuncitonDeatails from "./BannerDetails";
import BannerFuncitonImage from "./BannerImage";
import BannerFuncitonRoot from "./BannerRoot";

const Banner = {
  Root: BannerFuncitonRoot,
  Image: BannerFuncitonImage,
  Details: BannerFuncitonDeatails
}

const BannerContent = Banner.Root
const BannerImage = Banner.Image
const BannerDetails = Banner.Details

export {
  BannerContent,
  BannerImage,
  BannerDetails
}