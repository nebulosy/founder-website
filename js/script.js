function showDiv(idDiv){
    let div = document.querySelector("#"+ idDiv);
    div.style.display = "block";
}

function hideDiv(idDiv){
    let div = document.querySelector("#"+ idDiv);
    div.style.display = "none";
}

function divStatus(idDiv){
    let div = document.querySelector("#"+ idDiv);
    let divSituation = div.style.display;
    return divSituation;
}

function slideImage(idDiv){
    let div = document.querySelector("#"+ idDiv);
    div.style.marginLeft = "-12%";

}

function slideImageToOriginal(idDiv){
    let div = document.querySelector("#"+ idDiv);
    div.style.marginLeft = "0%";

}

function aboutText(){
    let divName = ("about-text");
    let divSituation = divStatus(divName);

    let imagePrincipalDivName = ("principal-image");

    if (divSituation != "block"){
        showDiv(divName);
        slideImage("principal-image");
    }else{
        hideDiv(divName)
        slideImageToOriginal("principal-image");
    }
}

