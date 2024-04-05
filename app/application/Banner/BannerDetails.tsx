import { ReactNode } from "react"

interface BannerFuncitonDeatailsProps{
  children: ReactNode
}

export default function BannerFuncitonDeatails({ children }: BannerFuncitonDeatailsProps) {
  return (
    <div className="p-3 h-full min-w-10 max-w-50 rounded-md text-sm bg-zinc-100 flex flex-col justify-center gap-3 hover:bg-zinc-200 text-zinc-900 transition-all">
      {children}
    </div>
  )
}