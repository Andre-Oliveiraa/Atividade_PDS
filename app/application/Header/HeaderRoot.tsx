import { ReactNode } from "react"

interface HeaderFunctionRootProps{
    children: ReactNode
}

export default function HeaderFunctionRoot({ children }: HeaderFunctionRootProps){
    return(
        <div className="flex justify-between p-5 items-center">
            {children}
        </div>
    )
}