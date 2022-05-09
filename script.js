const divcontainer = document.querySelector('.divcontainer');
for(let i=1;i<257;i++)
{
    console.log('looopin')
    const div = document.createElement('div');
    divcontainer.appendChild(div);
}
function hoverDivs(e)
{
    const hover_div = e.target;
    console.log(hover_div);
    hover_div.style.backgroundColor = 'blue';
}
divcontainer.addEventListener('mouseover',hoverDivs)
