export class userprofile {

    user :string;
    isAdmin :number;
    isPremium :number;
    fName :string;
    lName :string;
    email :string;

    constructor(user :string, fName :string, lName :string, isAdmin :number, 
        isPremium :number, email :string) {
        this.user = user;
        this.fName = fName;
        this.lName = lName;
        this.isAdmin = isAdmin;
        this.isPremium = isPremium;
        this.email = email;
    }

}