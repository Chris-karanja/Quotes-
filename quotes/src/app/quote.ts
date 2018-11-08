export class Quote {
    public showDetail: boolean;
    constructor(public quoteID: number, public message: string, public author: string, public upVote: number, public downVote
        : number, public dateAdded: Date) {
    this.showDetail = false;
 }
}
