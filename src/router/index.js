import Home from "@/page/home";
import Login from "@/page/login";
import { Redirect } from "react-router";
import {homeChildrenRoutes} from "./choosePage"
export default [{
    path:'/',
    render:()=>{
        return <Redirect to="/login"></Redirect>
    },
    component:Home,
    exact: true
},
    {path:"/home",
    component:Home,
    routes:homeChildrenRoutes},
    {
        path:"/login",
        component:Login
    }
]