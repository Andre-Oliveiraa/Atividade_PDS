import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import {
  BannerContent,
  BannerImage,
  BannerDetails
} from "./application/Banner";

import { Eye, FileText } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-screen grid grid-cols-3 grid-rows-4 p-5 gap-5">
      <BannerContent>
        <BannerImage
          className="w-full rounded-md"
          src="/Banner.jpg"
        />
        <div className="flex gap-3">
          <BannerDetails>
            <Eye />
            <p className="font-bold">View</p>
          </BannerDetails>

          <BannerDetails>
            <FileText />
            <p className="font-bold">Documentos</p>
          </BannerDetails>
        </div>
      </BannerContent>
    </div>
  );
}
