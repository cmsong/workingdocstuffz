import { Billing } from './Billing';
import { NewGames } from './NewGames';
export class Fulluser {
    username :string;
    password: string;
    isPremium :number;
    isAdmin :number;
    billing: Billing[];
    fName :string;
    lName :string;
    email :string;
    ug: NewGames[] = [];
    constructor(username :string, password: string,isPremium :number,isAdmin :number,billing: Billing[], fName :string, lName :string,
        email :string, ug: NewGames[] ) {
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