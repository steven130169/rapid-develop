export function findMaxConsecutiveOnes(nums: number[]): number {
    let oneArray: number = 0
    let maxConsecutive: number = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            oneArray++
        } else {
            oneArray = 0
        }
        maxConsecutive = oneArray >= maxConsecutive ? oneArray : maxConsecutive
    }
    return maxConsecutive
}

export function ifLogic() {
    let a = undefined
    if (!a) {
        console.log(new Date, `inside if`, a);
    }
    console.log(new Date, a);
}

ifLogic()

/**
 * Find Numbers with Even Number of Digits
 * @param nums
 */
export function findNumbers(nums: number[]): number {
    let resultEvenNumberOfDigits: number = 0;
    for (const num of nums) {
        let numberDigits = num.toString().split("").length;
        if (numberDigits % 2 === 0) {
            resultEvenNumberOfDigits++
        }
    }
    return resultEvenNumberOfDigits
}
