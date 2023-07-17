function dice(){
    let x = Math.floor((Math.random() * 6) + 1);
    document.querySelector(".img1").setAttribute("src","images/dice"+x+".png");
    let y = Math.floor((Math.random() * 6) + 1);
    document.querySelector(".img2").setAttribute("src","images/dice"+y+".png");
    if(x===y){
        document.querySelector("h1").innerHTML="🏳️‍🌈Draw🏳️‍🌈";
    }
    else if(x>y){
        document.querySelector("h1").innerHTML="🏳️‍🌈Player 1 Win";
    }
    else{
        document.querySelector("h1").innerHTML="Player 2 Win🏳️‍🌈";
    }

}
dice();

