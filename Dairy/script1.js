function gfg(imgs) { 
    var expandImg = document.getElementById("expand");  
    expandImg.src = imgs.src;  
    expandImg.parentElement.style.display = "block";
    expandImg.parentElement.style.cursor = "crosshair";
}
