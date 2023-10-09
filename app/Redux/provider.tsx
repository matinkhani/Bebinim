"use client"

import { Provider } from "react-redux"
import storee from "./store"

export function Providers({children}:{children:React.ReactNode}){
    return(
        <Provider store={storee}>{children}</Provider>
    )
}