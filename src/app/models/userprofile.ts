import { Game } from 'models/Game';
import { Billing } from 'models/Billing';

export class userprofile {

    username :string;
    password: string;
    isPremium :number;
    isAdmin :number;
    billing: Billing[];
    fName :string;
    lName :string;
    email :string;
    ug: Game[];

    constructor(username :string, password: string,isPremium :number,isAdmin :number,billing: Billing[], fName :string, lName :string,
        email :string, ug: Game[] ) {
        this.username = username;
        this.password = password;
        this.isPremium = isPremium;
        this.isAdmin = isAdmin;
        this.billing = billing;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.ug = ug;
        
    }

}