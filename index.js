let cn=document.getElementById("cn")
let cnopen=document.getElementById("cnopen")
let en=document.getElementById("en")
let enopen=document.getElementById("enopen")

cn.style.display="none"
en.style.display="none"
cn.value="n"
en.value="n"

cnopen.onclick=function(){
    if(cn.value=="n"){
        cn.style.display="inline"
        en.style.display="none"
        cn.value="y"
        en.value="n"
    }else{
        cn.style.display="none"
        cn.value="n"
    }
}

enopen.onclick=function(){
    if(en.value=="n"){
        en.style.display="inline"
        cn.style.display="none"
        en.value="y"
        cn.value="n"
    }else{
        en.style.display="none"
        en.value="n"
    }
}