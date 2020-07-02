var a= document.getElementsByClassName('sidebar');
function Start(){
    a[0].style.width = "220px";
    document.getElementById('cross').style.display="block";
}
function Close(){
    a[0].style.width = "0px";
    document.getElementById('cross').style.display="none";
}