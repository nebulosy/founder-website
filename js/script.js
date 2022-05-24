function showOrHideDiv(idDiv,show){
    if(show == true){
        let div = document.querySelector("#"+ idDiv);
        div.style.display = "block";
    }else{
        let div = document.querySelector("#"+ idDiv);
        div.style.display = "none";
    }
}

function divStatus(idDiv){
    let div = document.querySelector("#"+ idDiv);
    let divSituation = div.style.display;
    return divSituation;
}

function slideImage(idDiv,slideSize){
    let div = document.querySelector("#"+ idDiv);
    div.style.marginLeft = (slideSize+"%");
}

function aboutText(){
    let divName = ("about-text");
    let divSituation = divStatus(divName);

    if (divSituation != "block"){
        showOrHideDiv(divName,true);
        slideImage("principal-image",-12);
    }else{
        showOrHideDiv(divName,false);
        slideImage("principal-image",0);
    }
}

