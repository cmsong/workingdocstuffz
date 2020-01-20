export class Game{
    gameId :number;
    title :string;
    price :number;
    photo :string;
    genre :string;
    releaseDate :number;
    rated :string;
    description :string;

    constructor(gameId :number,title :string, price :number, photo :string, 
        genre :string, releaseDate :number,rated :string, description :string){
            this.gameId = gameId;
            this.title = title;
            this.price = price;
            this.photo = photo;
            this.genre = genre;
            this.releaseDate = releaseDate;
            this.rated = rated;
            this.description = description;
    }

}