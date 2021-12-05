function findout(){

    var random = Math.round(Math.random() * 100);
    //var show = document.getElementById('answer').style.visibility='visible'
    if (random > 70){
        document.getElementById('answer').innerHTML = "You are " + random + " % Smart, nice";
        (document.getElementById('bt').style.visibility='hidden')
    } else {
        document.getElementById('answer').innerHTML = "You are " + random + " % Dumb, smh";
        (document.getElementById('bt').style.visibility='hidden')
    } 
}
