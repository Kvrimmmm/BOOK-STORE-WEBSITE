
document.title = "📖 BookStore";
document.querySelector("h1").style.color = "#2d3436";

const scrollTopBtn = document.getElementById("scrollTop");
const welcomeBtn = document.getElementById("welcomeBtn");
const printBtn = document.getElementById("printBtn");

window.onscroll = function () {
    if (window.scrollY > 200) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

welcomeBtn.onclick = function () {
    alert("👋 Welcome to your cozy Book Store!");
};

printBtn.onclick = function () {
    alert("🖨️ Printing the current page...");
    window.print();
};
