export class Users {
    username: string;
    password: string;
    email: string;
    fname: string;
    lname: string;
   
    constructor(username :string, password: string, email?: string, fname?: string, lname?: string){
        this.username = username;
        this.password = password;
        this.email = email;
        this.fname = fname;
        this.lname = lname;
    }
}