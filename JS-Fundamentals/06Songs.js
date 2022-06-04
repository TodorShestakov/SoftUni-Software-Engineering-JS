function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = arr.shift();
    let typeList = arr.pop()

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split("_");
        let typeOfSong = tokens[0]
        let name = tokens[1]
        let time = tokens[2]

        if (typeList == "all") {
            console.log(name);
        } else if (typeList == typeOfSong) {
            console.log(name);
        }
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);