export class Users {
    username: string;
    password: string;
    isPremium: number;
    isAdmin: number;
    b_id: number;
    fname: string;
    lname: string;
    email: string;

    constructor(username:string,password:string,isPremium:number,isAdmin:number,b_id:number,fname:string,
        lname:string, email:string){
        this.username = username;
        this.password = password;
        this.isPremium = isPremium;
        this.isAdmin = isAdmin;
        this.b_id = b_id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
    }
}