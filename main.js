document.title = "📖 BookStore";
document.querySelector("h1").style.color = "#2d3436";

const btn = document.getElementById("scrollTop");
const btn2 = document.getElementById("welcomeBtn");

window.onscroll = function () 
{
    if (window.scrollY > 200) 
    {
        btn.style.display = "flex";
    } 
    
    else
    {
        btn.style.display = "none";
    }

};

btn.onclick = function () 
{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

btn2.onclick = function ()
{
    alert("👋 Hello reader! Welcome To Our Book Store.");
};

printBtn.onclick = function ()
{
    alert("🖨️ Preparing your page for print... Press Ok To Continue");
    window.print();                                 // حته زيادة من عندي و valid 
}