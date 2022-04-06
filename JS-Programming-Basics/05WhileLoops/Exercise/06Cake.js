function solution(input) {

    let cakeSide1 = Number(input.shift());
    let cakeSide2 = Number(input.shift());

    let cakeSize = (cakeSide1 * cakeSide2);
    let totalPieces = 0;
    let command = (input.shift());

    while (command !== "STOP" && totalPieces <= cakeSize) {
        let piecesCounter = Number(command);
        totalPieces += piecesCounter;
        command = input.shift();
    }

    if (command === "STOP" && totalPieces < cakeSize) {
        console.log(`${cakeSize - totalPieces} pieces are left.`);
    } else {
        console.log(`No more cake left! You need ${totalPieces - cakeSize} pieces more.`);
    }
}
solution(["10", "2", "2", "4", "6", "STOP"])
