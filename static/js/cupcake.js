function readmore(obj){
    if (obj.value=="readmore"){
        obj.parentNode.getElementsByClassName('summary')[0].style.display="none";
        obj.parentNode.getElementsByClassName('content')[0].style.display="block";
        obj.innerHTML="收起";
        obj.value="summary";
    }else{
        obj.parentNode.getElementsByClassName('summary')[0].style.display="block";
        obj.parentNode.getElementsByClassName('content')[0].style.display="none";
        obj.innerHTML="阅读更多";
        obj.value="readmore";
    }
}
