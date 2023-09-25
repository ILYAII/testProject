import {multi, sum} from "./01";


let a: number;
let b: number;
let c: number;

beforeEach (() => {
    a = 1
    b = 2
    c = 3
})

test('test summa', () => {
    const result1 = sum(a,b)
    const result2 = sum(b,c)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test("multi test", () => {
    const result1 = multi(a,c)
    const result2 = multi(b,c)
    expect(result1).toBe(3)
    expect(result2).toBe(6)
})
