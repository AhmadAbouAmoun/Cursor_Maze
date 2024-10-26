var start = document.getElementById("start");
var end = document.getElementById("end");
var status = document.getElementById("status");
var boundaries = document.querySelectorAll(".boundary");
var winnable = true;
start.addEventListener("mouseover", function () {
    document.getElementById("status").textContent = "Game has started";
    boundaries.forEach((boundary) => {
        boundary.classList.remove("highlighted");
        winnable = true;
    });
});
end.addEventListener("mouseover", function () {
    if (winnable) {
        document.getElementById("status").textContent = "Game has ended you won";
    } else {
        document.getElementById("status").textContent = "You already lost try again";
    }
});

boundaries.forEach((boundary) => {
    boundary.addEventListener("mouseover", function () {
        if (winnable) {
            winnable = false;
            boundary.classList.add("highlighted");
            document.getElementById("status").textContent = "Game has ended you lost";
        }
    });
});
