import {Tennis} from "./tennis";

describe('tennis game', function () {
    let tennis: Tennis;
    beforeEach(() => {
        tennis = new Tennis;

    });


    function scoreShouldBe(expected: string) {
        expect(tennis.score()).toEqual(expected);
    }

    it('should be love all', function () {
        scoreShouldBe('love all');
    });
    it('should be fifteen love', function () {
        tennis.firstPlayerScore()
        scoreShouldBe('fifteen love');
    });
    it('should be thirty love', function () {
        tennis.firstPlayerScore()
        tennis.firstPlayerScore()
        scoreShouldBe('thirty love');
    });


});
