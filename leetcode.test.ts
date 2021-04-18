import {findMaxConsecutiveOnes, findNumbers, ifLogic} from "./leetcode";

describe('leet code', function () {
    it('should be equal 2', function () {
        expect(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toEqual(2);
    });

    it('should be equal 3', function () {
        expect(findMaxConsecutiveOnes([1, 0, 1, 1, 1, 0, 1])).toEqual(3);
    });

    it('should be equal 1', function () {
        expect(findMaxConsecutiveOnes([1, 0, 0, 0, 1, 0, 1])).toEqual(1);
    });

    it('should be equal 1 just 1 ', function () {
        expect(findMaxConsecutiveOnes([1])).toEqual(1);
    });

    it('should be equal 0 just 0', function () {
        expect(findMaxConsecutiveOnes([0])).toEqual(0);
    });

    it('should be equal 1 [0,1]', function () {
        expect(findMaxConsecutiveOnes([0, 1])).toEqual(1);
    });


    it('if true', function () {
        expect(ifLogic()).toEqual(1);
    });
});

describe('Find Numbers with Even Number of Digits', function () {
    it('should be 2', function () {
        expect(findNumbers([12, 345, 2, 6, 7896])).toEqual(2);
    });

    it('should be 1', function () {
        expect(findNumbers([555, 901, 482, 1771])).toEqual(1);
    });


});
describe(' Squares of a Sorted Array', function () {
    function sortedSquares(numbers: number[]) {
        let results: number[] = []
        for (const number of numbers) {
            let items = Math.pow(number, 2);
            results.push(items)
        }
        return results.sort((a, b) => {
            return a - b
        });
    }

    it('should be [0,1,9,16,100]', function () {
        expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    });
    it('should be [-7,-3,2,3,11]', function () {
        expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
    });

});

describe('Duplicate Zeros', function () {
    /**
     Do not return anything, modify arr in-place instead.
     */
    function duplicateZeros(arr: number[]) {
        const arrCopy = [...arr];
        let additional = 1;
        for (let i = 0; i < arrCopy.length; i++) {
            if (arrCopy[i] === 0) {
                arr.splice(i + additional, 0, 0);
                additional += 1;
            }
        }
        arr.splice(arrCopy.length, arr.length);
    }

    it('should be [1,0,0,2,3,0,0,4]', function () {
        let arr = [1, 0, 2, 3, 0, 4, 5, 0]
        duplicateZeros(arr)
        expect(arr).toEqual([1, 0, 0, 2, 3, 0, 0, 4]);
    });

    it('should be [1,2,3]', function () {
        let arr = [1, 2, 3]
        duplicateZeros(arr)
        expect(arr).toEqual([1, 2, 3]);
    });


});

describe('Merge Sorted Array', function () {
    /**
     Do not return anything, modify nums1 in-place instead.
     */
    function merge(nums1: number[], m: number, nums2: number[], n: number): void {
        nums1.splice(m, n, ...nums2)
        nums1.sort((a, b) => {
            return a - b;
        })
        console.log(nums1)

    };
    it('should be [1,2,2,3,5,6]', function () {
        let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
        merge(nums1, m, nums2, n)
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });
    it('should be [1]', function () {
        let nums1 = [1], m = 1, nums2 = [], n = 0
        merge(nums1, m, nums2, n)
        expect(nums1).toEqual([1]);
    });

});
