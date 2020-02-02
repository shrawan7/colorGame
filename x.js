var numSquares = 6;
var pickedColor;
var colors = [];

var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay")
var resetBtn = document.querySelector("#new")
var modeBtns = document.querySelectorAll(".mode");
var messageDisplay = document.querySelector("#message")

init();

function init()
{
    setUpModeBtns();
    setUpSquares();
    reset();
}

function setUpModeBtns()
{
    for(var i=0;i<modeBtns.length;i++)
    {
        modeBtns[i].addEventListener("click",function(){
            modeBtns[1].classList.remove("selected");
            modeBtns[0].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares=3:numSquares=6;
            reset();
        });
    }
}

function setUpSquares()
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].addEventListener("click",function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor)
            {
                messageDisplay.textContent="Correct!!!";
                changeColor(clickedColor);
                h1.style.background = clickedColor
                resetBtn.textContent = "Play Again?";
            }
            else
            {
                messageDisplay.textContent="Try Again";
                this.style.backgroundColor = "#232323";
            }   
        });
    }   
}

for(var i=0;i<modeBtns.length;i++)
{
    modeBtns[i].addEventListener("click",function(){
        modeBtns[1].classList.remove("selected");
        modeBtns[0].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares=3:numSquares=6;
        reset();
    });
}

function reset()
{
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent="new colors"
    messageDisplay.textContent="";
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i]){
          squares[i].style.backgroundColor = colors[i];
          squares[i].style.display= "block";
        }  
        else{
          squares[i].style.display = "none"; 
        }   
    }
    h1.style.backgroundColor = "steelblue";  
}

resetBtn.addEventListener("click",function(){
    reset();
});


for(var i=0;i<squares.length;i++)
{
    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent="Correct!!!";
            changeColor(clickedColor);
            h1.style.background = clickedColor
            resetBtn.textContent = "Play Again?";
        }
        else
        {
            messageDisplay.textContent="Try Again";
            this.style.backgroundColor = "#232323";
        }   
    });
}

function changeColor(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    var arr = [];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}