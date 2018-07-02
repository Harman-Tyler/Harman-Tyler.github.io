function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
    
    if (document.getElementById("HambugerButton").innerHTML == "☰") {
        document.getElementById("HambugerButton").innerHTML = "❎";
    }else{
        document.getElementById("HambugerButton").innerHTML = "☰";
    }
}