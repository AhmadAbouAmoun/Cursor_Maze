var start = document.getElementById("start");
var end = document.getElementById("end");
var status = document.getElementById("status");
var boundaries = document.querySelectorAll(".boundary");
var winnable = true;
var won = false;
start.addEventListener("mouseover", function () {
    document.getElementById("status").textContent = "Game has started";
    boundaries.forEach((boundary) => {
        boundary.classList.remove("highlighted");
        winnable = true;
        won = false;
    });
});
end.addEventListener("mouseover", function () {
    if (winnable) {
        document.getElementById("status").textContent = "Game has ended you won";
        won = true;
    } else {
        document.getElementById("status").textContent = "You already lost try again";
    }
});

boundaries.forEach((boundary) => {
    boundary.addEventListener("mouseover", function () {
        if (!won) {
            if (winnable) {
                winnable = false;
                boundary.classList.add("highlighted");
                document.getElementById("status").textContent = "Game has ended you lost";
            }
        }
    });
});
