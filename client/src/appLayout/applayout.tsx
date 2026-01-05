import { Footers } from "@/pages/Other/footer/footer";
import { Headers } from "@/pages/Other/header/header";
import { Outlet } from "react-router-dom";
export const AppLayout=()=>{
    return (
         <>
    <Headers />
    <Outlet />
    <Footers />
    </>
    )
}