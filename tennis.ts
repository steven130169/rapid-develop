export class Tennis {
    private firstPlayerScoreTimes: number = 0;

    score() {
        if (this.firstPlayerScoreTimes === 1) {
            return 'fifteen love';
        }
        if (this.firstPlayerScoreTimes === 2) {
            return 'thirty love';
        }
        return 'love all';
    }

    firstPlayerScore() {
        this.firstPlayerScoreTimes++
    }
}
