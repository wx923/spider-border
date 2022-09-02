import axios from "axios"
const request=axios.create({
    baseURL:"http://121.196.208.81/"
})
export function RequestHightTieba(){
    var search=localStorage.getItem("search");
    var Option={
        url:'home/tieba?tp=valuable&kw='+search,
        method: 'get',
    };
    return request(Option);
}


export function RequestLowTieba(search){
    var search=localStorage.getItem("search");
    var Option={
        url:'home/tieba?tp=worthless&kw='+search,
        method: 'get',
    };
    return request(Option);
}

export function sendChooseLowerTiebaItem(data,page_num){
    var search=localStorage.getItem("search");
    var Option={
        url:'/home/tieba',
        method: 'post',
        data,
        params:{
            next_page:true,
            page_num,
            worth_status:"worthless",
            keyword:search,
        }
    };
    return request(Option);
}

export function sendChooseTiebaItem(data,page_num){
    var search=localStorage.getItem("search");
    var Option={
        url:'/home/tieba',
        method: 'post',
        data,
        params:{
            next_page:true,
            page_num,
            worth_status:"valuable",
            keyword:search,
        }
    };
    return request(Option);
}

export function RequestfileNameList(){
    var Option={
        url:'home/files?purpose=folder',
        method: 'get',
    };
    return request(Option);
}

export  function RequestfileNodeNameList(keyword){
    var Option={
        url:'home/files?purpose='+keyword,
        method: 'get',
    };
return request(Option);
}


