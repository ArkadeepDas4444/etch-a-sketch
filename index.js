const cont = document.getElementById("cont");
for(let i=0; i<16*16; i++)
{
    const sq = document.createElement("div");
    sq.classList.add("square");
    sq.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    cont.appendChild(sq);
}

document.querySelectorAll(".square").forEach((sq)=>{
    sq.addEventListener("mouseover",()=>{
        sq.style.backgroundColor="black";
    });
});

document.getElementById("numSqBtn").addEventListener("click",()=>{
    n = parseInt(prompt("Enter the no. of squares in each row:"));
    cont.innerHTML = "";
    if (n<=99)
    {
        for(let i=0; i<n*n; i++)
        {
            const sq = document.createElement("div");
            sq.classList.add("square");
            sq.style.width = `${640/n}px`;
            sq.style.height = `${640/n}px`;
            sq.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
            cont.appendChild(sq);
        }
    }
});