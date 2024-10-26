var start = document.getElementById("start");
var end = document.getElementById("end");
var status = document.getElementById("status");
var boundaries = document.querySelectorAll(".boundary");
start.addEventListener("mouseover", function () {
    document.getElementById("status").textContent = "Game has started";
    boundaries.forEach((boundary) => {
        boundary.classList.remove("highlighted");
    });
});
end.addEventListener("mouseover", function () {
    document.getElementById("status").textContent = "Game has ended you won";
});

boundaries.forEach((boundary) => {
    boundary.addEventListener("mouseover", function () {
        boundary.classList.add("highlighted");
        document.getElementById("status").textContent = "Game has ended you lost";
    });
});
