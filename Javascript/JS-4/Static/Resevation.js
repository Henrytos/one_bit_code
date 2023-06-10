class Reservation {
    constructor(guests, room, days) {
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150

    static showBaseFee() {
        console.log(`a base de juros é ${Reservation.baseFee}`)
    }
    static get premiumFee() {
        console.log(`Premium fee is $${Reservation.baseFee * 1.5}`)
    }
}

Reservation.showBaseFee()
const r1 = new Reservation(3, "201", 2)
console.log(r1)

Reservation.baseFee = 200

const r2 = new Reservation(2, "104", 2)
console.log(r2)

Reservation.premiumFee
