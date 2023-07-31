
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var srcOfImage = "images/dice" + randomNumber1 + ".png";
    var image = document.querySelectorAll("img")[0];
    image.setAttribute("src", srcOfImage);


    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var srcOfImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", srcOfImage2);

    if(randomNumber1>randomNumber2){
      document.getElementById("title").innerHTML = "Player 1 WINS !!!";
    }else if(randomNumber1<randomNumber2){
      document.getElementById("title").innerHTML = "Player 2 WINS!!!";
    }else{
      document.getElementById("title").innerHTML = "DRAW !!!";
    }
