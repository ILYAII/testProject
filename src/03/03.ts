import {CityType, GovernmentBuildingsType, HouseType} from "../02/02";

export const addMoneyToBudget = (s: GovernmentBuildingsType, budgetPlus: number) => {
    s.budget += budgetPlus
}

export function repairHouse(r: HouseType) {
    r.repaired = true
}

export const toFireStaff = (g: GovernmentBuildingsType, staffCountFire: number) => {
    g.staffCount -= staffCountFire
}

export function toHireStaff(g: GovernmentBuildingsType, staffCountHire: number) {
    g.staffCount += staffCountHire
}

export const createMassege = (c: CityType) => {
    return "hello " + c.title + ' citizens. i want you be happy. All ' + c.citizensNumber + ' men'
}