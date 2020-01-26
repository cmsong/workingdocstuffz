import { Genre } from './Genre';
export class NewGames{
    gameId :number;
    title :string;
    price :number;
    photo :string;
    genres :Genre[];
    releaseDate :number;
    rated :string;
    description :string;
    constructor(gameId :number,title :string, price :number, photo :string, 
        genres :Genre[], releaseDate :number,rated :string, description :string){
            this.gameId = gameId;
            this.title = title;
            this.price = price;
            this.photo = photo;
            this.genres = genres;
            this.releaseDate = releaseDate;
            this.rated = rated;
            this.description = description;
    }
}