function tickets(input) {

    let standartTickets = 0;
    let studentTickets = 0;
    let kidsTickets = 0;
    let index = 0;

    let inputLine = input[index++];

    while (inputLine !== 'Finish') {
        let movieName = inputLine;
        let allTickets = Number(input[index++]);
        let availableTickets = allTickets;
        let ticketType = input[index]++;

        while (ticketType !== 'End') {
            switch (ticketType) {
                case 'standard':
                    standartTickets++;
                    break;
                case 'student':
                    studentTickets++;
                    break;
                case 'kid':
                    kidsTickets++;
                    break;
            }
            availableTickets--;
            if (availableTickets === 0) {
                break;
            }
            ticketType = input[index++];
        }
        let boughtTickets = allTickets - availableTickets;
        let percentageFull = boughtTickets / allTickets * 100;
        console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);

        inputLine = input[index++];
    }
    let allTickets = standartTickets + studentTickets + kidsTickets;
    console.log(`Total tickets: ${allTickets}`);

}
tickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
