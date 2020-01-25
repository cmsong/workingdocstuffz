import { Billing } from './Billing';
import { Game } from './Game';
​
export class userprofile {
​
    username :string;
    isAdmin :number;
    isPremium :number;
    fname :string;
    lname :string;
    email :string;
    billing :Billing;
    ug :Game[];
​
    constructor(username :string, fName :string, lName :string, isAdmin :number, 
        isPremium :number, email :string, billing :Billing, ug :Game[]) {
        this.username = username;
        this.fname = fName;
        this.lname = lName;
        this.isAdmin = isAdmin;
        this.isPremium = isPremium;
        this.email = email;
        this.billing = billing;
        this.ug = ug;
    }
​
}