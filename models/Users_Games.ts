export class Users {
    username: string;
    g_id: number;
    isOwned: number;
    rating: number;
    reviewCont: string;

    constructor(username:string,g_id:number,isOwned:number,rating:number,reviewCont:string){
        this.username = username;
        this.g_id = g_id;
        this.isOwned = isOwned;
        this.rating = rating;
        this.reviewCont = reviewCont;
    }
}