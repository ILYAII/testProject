type StudentType = {
    age: number
    adress: AdressType1
    height: number
    weith: number
    hobby: HobbyType[]
}
type AdressType1 = {
    street: string
    house: number
    appartament: number
    citi: string
    country: string
}
type HobbyType = {
    id: number
    title: string
}

const student: StudentType = {
    age: 25,
    adress: {
        street: 'vasnecova',
        house: 11,
        appartament: 26,
        citi: 'Minsk',
        country: 'RB'
    },
    height: 177,
    weith: 77,
    hobby: [
        {
            id: 1,
            title: 'baiskle'
        },
        {
            id: 2,
            title: 'snouboard'
        },
        {
            id: 3,
            title: 'cars'
        }
    ]
}

console.log(student.age)
console.log(student.hobby[0].title)
console.log(student.adress.citi)
console.log(student.adress.appartament)

export type StreetType = {
    title: string
}
export type AdressType = {
    number?: number
    street: StreetType
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AdressType
}
export type GovernmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AdressType
}

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: GovernmentBuildingsType[]
    citizensNumber: number
}