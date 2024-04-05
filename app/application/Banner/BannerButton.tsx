import { HtmlHTMLAttributes, ReactNode } from "react"

interface BannerFuncitonButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function BannerFuncitonButton({ children }: BannerFuncitonButtonProps) {
  return (
    <button className="p-3 min-h-10 min-w-10 rounded-md text-sm bg-zinc-100 flex items-center gap-3 hover:bg-zinc-800 hover:text-zinc-200 transition-all">
      {children}
    </button>
  )
}