import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  BannerContent,
  BannerImage,
  BannerButton
} from "./application/Banner";

import { Eye, FileText } from 'lucide-react'
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="w-screen grid grid-cols-3 grid-rows-4 p-5 gap-5">
      <BannerContent>
        <BannerImage
          className="w-full rounded-md"
          src="/Banner.jpg"
        />
        <div className="flex gap-3">
          <BannerButton>
            <Eye />
            <p className="font-bold">View</p>
          </BannerButton>

          <BannerButton>
            <FileText />
            <p className="font-bold">Documentos</p>
          </BannerButton>
        </div>
      </BannerContent>
    </div>
  );
}
