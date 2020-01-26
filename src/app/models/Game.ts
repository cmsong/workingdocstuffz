import { Genre } from './Genre';
export class Game{
    gameId :number;
    genres :Genre[];
    reviews :[];
    title :string;
    price :number;
    image :string;
   
    releaseDate :number;
    rated :string;
    description :string;
    constructor(gameId :number,title :string, price :number, photo :string, 
        genres :Genre[], reviews: [], releaseDate :number,rated :string, description :string){
            this.gameId = gameId;
             this.genres = genres;
             this.reviews = reviews;
             this.title = title;
            this.price = price;
            this.image = photo;
           
            this.releaseDate = releaseDate;
            this.rated = rated;
            this.description = description;
    }
}