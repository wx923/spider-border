import WXother from "../components/show/other";
import WXTieba from "../components/show/tieba";
import WXTips from "../components/show/tips";
import WXxiaohongshu from "../components/show/xiaohongshu";

export const homeChildrenRoutes=[{
    path:"/home/tieba",
    component:WXTieba,
},{
    path:"/home/xiaohongshu",
    component:WXxiaohongshu
},{
    path:"/home/other",
    component:WXother
},{
    path:"/home/tips",
    component:WXTips}]