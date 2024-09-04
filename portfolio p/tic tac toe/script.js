let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let newBtn = document.getElementById("new-btn");
let msgContainer = document.getElementById("msg-container");
let msg = document.getElementById("msg");
let first = document.getElementById("first");
let second = document.getElementById("second");
let fTitle = document.getElementById("f-title");
let sTitle = document.getElementById("s-title");
let fplayer = document.getElementById("fplayer");
let splayer = document.getElementById("splayer");
let Fscore = document.getElementById("f-score");
let Sscore = document.getElementById("s-score");
let FscoreName = document.getElementById("FscoreName");
let SscoreName = document.getElementById("SscoreName");




a = prompt("enter the first player");
b = prompt("enter the second player");
first.innerText = a;
second.innerText = b;
FscoreName.innerText = a;
SscoreName.innerText = b;
const turn = () => {
    fplayer.addEventListener("change", () => {
    });
}

fplayer.addEventListener("change", () => {
    if (fplayer.value == "O") {
        splayer.value = "X";
    }
    else {
        splayer.value = "O";
    }
});
splayer.addEventListener("change", () => {

    if (splayer.value == "O") {
        fplayer.value = "X";
    }
    else {
        fplayer.value = "O";
    }
    console.log(fplayer.value);
    console.log(splayer.value);
});




let scoref = 1;
let scores = 1;
turnO = true;
turnX = true;
let winPatern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const scoreClear = () => {
    scores = 1;
    Sscore.innerText = 0;
    scoref = 1;
    Fscore.innerText = 0;
}
const askplayerName = () => {
    a = prompt("enter the first player");
    b = prompt("enter the second player");
};
const updateName = () => {
    first.innerText = a;
    FscoreName.innerText = a;
    SscoreName.innerText = b;
    second.innerText = b;

};
const checkWinner = () => {
    for (let pattern of winPatern) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                disableBoxes();
                showWinner(pos1val);


            }

        }

    }

}
const showWinner = (winner) => {
    msgContainer.classList.remove("hide");
    if (fplayer.value == "O") {


        if (winner === "O") {
            msg.innerText = `Congratulations winner is ${a}`;
            fTitle.innerText = "Winner";
            sTitle.innerText = "Loser";
            Fscore.innerText = scoref;
            scoref = scoref + 1;
        }
        else {
            sTitle.innerText = "Winner";
            fTitle.innerText = "Loser";
            msg.innerText = `Congratulations winner is ${b}`;
            Sscore.innerText = scores;
            scores = scores + 1;
        }

    }
    else {
        if (winner === "O") {
            msg.innerText = `Congratulations winner is ${b}`;
            sTitle.innerText = "Winner";
            fTitle.innerText = "Loser";
            Sscore.innerText = scores;
            scores = scores + 1;
        }
        else {
            fTitle.innerText = "Winner";
            sTitle.innerText = "Loser";
            msg.innerText = `Congratulations winner is ${a}`;
            Fscore.innerText = scoref;
            scoref = scoref + 1;
        }
    }



    fTitle.style.display = "block";
    sTitle.style.display = "block";



}



const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        turn();
        if (fplayer.value == "O") {
            if (turnO) {
                box.innerText = "O";
                turnO = false;

            }
            else {
                box.innerText = "X";
                turnO = true;
            }

        }
        else {
            if (turnX) {
                box.innerText = "X";
                turnX = false;

            }
            else {
                box.innerText = "O";
                turnX = true;
            }
        }

        box.disabled = true;
        checkWinner();

    })
});
resetBtn.addEventListener("click", () => {
    turnO = true;
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    sTitle.style.display = "none";
    fTitle.style.display = "none";

})
newBtn.addEventListener("click", () => {
    turnO = true;
    turnX = true;

    scoreClear();
    enableBoxes();
    msgContainer.classList.add("hide");
    askplayerName();
    updateName();
    sTitle.style.display = "none";
    fTitle.style.display = "none";
})