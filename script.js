const divcontainer = document.querySelector('.divcontainer');
let x=16;
makegrid(16);
function makegrid(x)
{
    let squares=x*x;
    //clearing old divs
    while(divcontainer.firstChild)
    {
        divcontainer.removeChild(divcontainer.lastChild);
    }
    for(let i=0;i<squares;i++)
    {
    const div = document.createElement('div');
    divcontainer.appendChild(div);
    }
    let percentage=100/x;
    let div_height=400/x;
    const divs=document.querySelectorAll('.divcontainer div');
    divs.forEach(div=>{
        div.style.flex=`1 0 ${percentage}%`
        div.style.height=`${div_height}px`
    })
}
function hoverDivs(e)
{
    const hover_div = e.target;
    hover_div.style.backgroundColor = 'blue';
}
divcontainer.addEventListener('mouseover',hoverDivs)

const grid = document.querySelector('#grid_button');
grid.addEventListener('click',changeGridSize)

function changeGridSize(e)
{
    x= parseInt(prompt("Please Enter the Grid Size you want",""),10)
    if(isNaN(x))
        alert('invalid input !. Please enter a number between 1 and 100');
    else if(x<=0 || x>100)
    {
        alert('invalid input !. Please enter a number between 1 and 100')
    }
    else
    makegrid(x);
}
const reset = document.querySelector('#reset_button');
reset.addEventListener('click',function(){
    makegrid(16);
})