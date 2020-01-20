export class Reviews {
    r_id: number;
    g_id: number;
    username: string;
    review: number;
    cont: string;

    constructor(r_id:number,g_id:number,username:string,review:number,cont:string){
        this.r_id = r_id;
        this.g_id = g_id;
        this.username = username;
        this.review = review;
        this.cont = cont;
    }
}