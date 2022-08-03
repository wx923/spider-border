const path= require("path")
var resolve=(dir)=>{return path.resolve(__dirname,dir)}

module.exports={
    webpack:{
        alias:{
            "@":resolve("src"),
            '#':resolve('public')
        }
    }
}