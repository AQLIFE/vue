var ask = {
    url : './Info/web.json',
    reta :Object,
    AjaxObj: window.XMLHttpRequest?(new XMLHttpRequest()):(new ActiveXObject('Microsoft.XMLHTTP')),
    getJson:()=>{
        let _this = ask.AjaxObj
        _this.open('get',ask.url,false)
        _this.send()
        if(	_this.readyState === 4 && _this.status === 200)
            ask.reta = JSON.parse(_this.response).data
        // return ask.reta
    }
}
export default ask;