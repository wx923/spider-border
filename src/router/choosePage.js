import { Redirect } from "react-router";
import WXother from "../components/show/other";
import WXTieba from "../components/show/tieba";
import WXTips from "../components/show/tips";
import WXxiaohongshu from "../components/show/xiaohongshu";
import WXTiebaHightShow from "../components/list/tieba-hight-show/tiebaShow";
import WXTiebaFileShow from "../components/list/tieba-load/tiebaLoad"
import WXTiebaLowShow from "../components/list/tieba-low-show/tiebaLowShow";
const valueTopNav = [{
    path: "/home/tieba/higtlist",
    component: WXTiebaHightShow,
},
{
    path: "/home/tieba/lowerlist",
    component: WXTiebaLowShow,
},
{
    path: "/home/tieba/updata",
    component: WXTiebaFileShow,
}
]


export const homeChildrenRoutes = [{
    path: "/home/tieba",
    routes: valueTopNav,
    component: WXTieba,
}, {
    path: "/home/xiaohongshu",
    component: WXxiaohongshu
}, {
    path: "/home/other",
    component: WXother
}, {
    path: "/home/tips",
    component: WXTips
}]

