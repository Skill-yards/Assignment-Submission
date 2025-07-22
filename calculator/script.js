const input = document.getElementById("display")
const buttons = document.querySelectorAll(".buttons button")

for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener("click",function(){
    var value= this.textContent;
    if(value === "clear")
    {
        input.value="";
    }
    else if(value ==="=")
    {
        input.value=eval(input.value)

    }
    else{
        input.value += value;
    }
    })
}