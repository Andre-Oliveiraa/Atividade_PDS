import { ReactNode } from "react"

interface BannerFuncitonRootProps {
  children: ReactNode
}

export default function BannerFuncitonRoot({ children }: BannerFuncitonRootProps) {
  return (
    <div className="w-full bg-zinc-900 min-h-40 p-3 flex flex-col gap-2 rounded-md">
      {children}
    </div>
  )
}