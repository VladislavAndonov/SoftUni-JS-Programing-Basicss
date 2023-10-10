function cinemaTickets(input) {
    let index = 0;
    let curMovieName = input[index];
    index++;
    let curFreeSeats = Number(input[index]);
    index++;
    let ticketType = input[index];
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    let curCapacity = 0;
    let totalTickets = 0;
    
    while(curMovieName !== 'Finish') {
        let curTicketsCount = 0;
        while (ticketType !== 'End') {
            switch (ticketType) {
                case "student":
                studentTickets++;
                break;
                case "standard":
                standardTickets++;
                break;
                case "kid":
                kidTickets++;
                break;
            }
            curTicketsCount++;
            if (curTicketsCount >= curFreeSeats) {
                break;
            }
            index++;
            ticketType = input[index];
        }
        if (ticketType === 'Finish') {
            break;
        }
        totalTickets += curTicketsCount;
        curCapacity = (curTicketsCount / curFreeSeats) * 100;
        console.log(`${curMovieName} - ${curCapacity.toFixed(2)}% full.`);
        index++;
        curMovieName = input[index];
        index++;
        curFreeSeats = Number(input[index]);
        index++;
        ticketType = input[index];
    }
    let percentStudentTickets = (studentTickets / totalTickets) * 100
    let percentStandardTickets = (standardTickets / totalTickets) * 100
    let percentKidTickets = (kidTickets / totalTickets) * 100
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentStudentTickets.toFixed(2)}% student tickets.`);
    console.log(`${percentStandardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${percentKidTickets.toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi","10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])