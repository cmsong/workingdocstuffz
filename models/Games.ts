export class Users {
    g_id: number;
    title: string;
    price: number;
    photo: string;
    release_date: string;
    rated: string;
    description: string

    constructor(g_id:number,title:string,price:number,photo:string,release_date:string,rated:string,
        description:string){
        this.g_id = g_id;
        this.title = title;
        this.price = price;
        this.photo = photo;
        this.release_date = release_date;
        this.rated = rated;
        this.description = description;
    }
}