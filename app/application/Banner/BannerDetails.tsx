import { HtmlHTMLAttributes, ReactNode } from "react"

interface BannerFuncitonDeatailsProps extends HtmlHTMLAttributes<HTMLDetailsElement> {
  children: ReactNode
}

export default function BannerFuncitonDeatails({ children }: BannerFuncitonDeatailsProps) {
  return (
    <details className="p-3 min-h-10 min-w-10 rounded-md text-sm bg-zinc-100 flex items-center gap- hover:bg-zinc-800 hover:text-zinc-200 transition-all">
      {children}
    </details>
  )
}