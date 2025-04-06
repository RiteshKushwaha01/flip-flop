function toggleInputs() {
    document.getElementById("srInputs").style.display = "none";
    document.getElementById("dInputs").style.display = "none";
    document.getElementById("jkInputs").style.display = "none";
    document.getElementById("tInputs").style.display = "none";

    let type = document.getElementById("flipflopType").value;
    document.getElementById(type.toLowerCase() + "Inputs").style.display = "block";

    updateDiagram(type);
}

function simulateFlipFlop() {
    let type = document.getElementById("flipflopType").value;
    let clk = document.getElementById("clk").value;
    let Q = 0;

    if (clk == 1) {
        switch (type) {
            case "SR":
                let S = document.getElementById("S").value;
                let R = document.getElementById("R").value;
                if (S == 1 && R == 0) Q = 1;
                else if (S == 0 && R == 1) Q = 0;
                else if (S == 1 && R == 1) Q = "Invalid";
                break;
            case "D":
                Q = document.getElementById("D").value;
                break;
            case "JK":
                let J = document.getElementById("J").value;
                let K = document.getElementById("K").value;
                if (J == 1 && K == 0) Q = 1;
                else if (J == 0 && K == 1) Q = 0;
                else if (J == 1 && K == 1) Q = Q === 1 ? 0 : 1;
                break;
            case "T":
                let T = document.getElementById("T").value;
                if (T == 1) Q = Q === 1 ? 0 : 1;
                break;
        }
    }

    document.getElementById("output").innerText = "Q = " + Q;
}

function updateDiagram(type) {
    let diagramSrc = "";

    switch (type) {
        case "SR":
            diagramSrc = "../diagrams/SR.jpg"; // SR Flip-Flop NAND gate diagram
            break;
        case "D":
            diagramSrc = "../diagrams/D.jpg"; // D Flip-Flop NAND gate diagram
           break;
        case "JK":
            diagramSrc = "../diagrams/JK.jpg"; // JK Flip-Flop NAND gate diagram
            break;
        case "T":
            diagramSrc = "../diagrams/T.jpg"; // T Flip-Flop NAND gate diagram
            break;
    }

    document.getElementById("flipflopDiagram").src = diagramSrc;
}