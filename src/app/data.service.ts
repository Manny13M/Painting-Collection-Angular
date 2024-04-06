import { Injectable } from '@angular/core';
import { ExpressMongoService } from './express-mongo.service';
import { BehaviorSubject } from 'rxjs';
import paintings from "../assets/data/paintings.json";
import paintingsDesc from "../assets/data/paintingsDesc.json";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  paintings : any = paintings.paintings; // paintings array from JSON file
  description: String = paintingsDesc.description; //description of painting collection

  // Subscriber has READ and WRITE permissions
  numberOfPaintingsInDatabase = new BehaviorSubject<any>(0);

  // Subscriber only has READ permissions
  numberOfPaintingsInDatabaseAsObserver = this.numberOfPaintingsInDatabase.asObservable();

  constructor(private mongo: ExpressMongoService) { }

  // From JSON file to MongoDB
  saveAllPaintingsToMongoDB() {
    this.mongo.saveAllPaintings(this.paintings).subscribe({
      next: (data: any) => { 
        console.log(data);
      },
      error: (e) => { 
        console.error(e);
      },
      complete: () => console.info('Complete') 
    });
  }

  setNumberOfPaintingsInDatabase() {
    this.mongo.getAllPaintings().subscribe({
      next: (data: any) => { 
        console.log(data);
        this.numberOfPaintingsInDatabase.next(data.length); // Set variable to data.length
      },
      error: (e) => { 
        console.error(e);
      },
      complete: () => console.info('Complete')
    });
  }

  getPaintingsDescription() {
    return this.description;
  }
  
}
