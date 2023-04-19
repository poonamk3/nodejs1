import { Request, Response } from "express"

export const getHolidays = () => {
    try {

        const payload = [
            {
                id: 1,
                name: "New Year",
                date: new Date('01/01/2023'),
                emoji: "🎉"
            },
            {
                id: 2,
                name: "Republic Day",
                date: new Date('01/26/2023'),
                emoji: "🇮🇳"
            },
            {
                id: 3,
                name: "Holi",
                date: new Date('03/09/2023'),
                emoji: "🎨"
            },
            {
                id: 4,
                name: "Independence Day",
                date: new Date('08/15/2023'),
                emoji: "🇮🇳"
            },
            {
                id: 5,
                name: "Raksha Bandhan",
                date: new Date('08/30/2023'),
                emoji: "🥳"
            },
            {
                id: 6,
                name: "Gandhi Jayanti",
                date: new Date('10/02/2023'),
                emoji: "🥳"
            },
            {
                id: 7,
                name: "Diwali",
                date: new Date('11/12/2023'),
                emoji: "🎆"
            },
            {
                id: 8,
                name: "Diwali",
                date: new Date('11/13/2023'),
                emoji: "🎆"
            },
            {
                id: 9,
                name: "Christmss",
                date: new Date('12/25/2023'),
                emoji: "🎄"
            }
        ]

        return payload
    } catch (err) {
        console.log(err)
    }
}
