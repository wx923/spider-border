import Home from "@/page/home";
import Login from "@/page/login";

export default [
    {path:"/",
    exact:true,
    component:Home},
    {
        path:"/login",
        component:Login
    }
]