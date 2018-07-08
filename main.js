var colorUser = localStorage.getItem("colorUser");
var nameUser = localStorage.getItem("nameUser");
if (colorUser != null) {
    document.body.style.color = colorUser;
    //document.querySelectorAll("a, h1, h2, h3, h4, h5, h6, p, span, ul, li").style.color = colorUser;
    document.getElementById("my_carousel").className = "carousel slide my_carousel_"+nameUser;
}
