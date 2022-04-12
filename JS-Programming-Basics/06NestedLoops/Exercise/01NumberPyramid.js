function pyramid(v) {

    for (let rows = 1; rows <= v; rows++) {
        let printCurrentLine = " ";
        for (let cols = 1; cols <= v; cols++) {
            if (cols <= rows) {
                printCurrentLine += cols + " ";
            }
        }
        console.log(printCurrentLine);
    }
}
pyramid(["7"])