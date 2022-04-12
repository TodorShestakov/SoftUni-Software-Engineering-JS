function building(input) {

    let maxFloors = Number(input.shift());
    let maxRooms = Number(input.shift());

    for (let floor = maxFloors; floor > 0; floor--) {
        let floorStr = "";
        for (let room = 0; room < maxRooms; room++) {

            if (floor == maxFloors) {
                floorStr += "L" + floor + room + " ";
            } else if (floor % 2 == 0) {
                floorStr += "O" + floor + room + " ";
            } else {
                floorStr += "A" + floor + room + " ";
            }
        }
        console.log(floorStr);
    }
}
building(["6", "4"])