// *** Main Tab ***

import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { ExpressMongoService } from '../express-mongo.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  outRecords: any = [];
  JsonIsInitialized: boolean = false;

  title!: string; 
  desc!: string; 
  painter!: string; 
  year!: number;
  culturalOrigin!: string; 
  comments!: string; 

  constructor(private dataService: DataService, private mongo: ExpressMongoService) {}

  ngOnInit() {
    this.setNumOfPaintingsFromDB();
  }

  savePainting() {

    if(this.validateInputFields()) {
      
      const params = { 
        title: this.title,
        desc: this.desc,
        painter: this.painter,
        year: this.year,
        culturalOrigin: this.culturalOrigin, 
        comments: this.comments,
      };
  
      this.mongo.savePainting(params).subscribe({
        next: (data: any) => { 
          console.log(data);
        },
        error: (e) => { 
          console.error(e);
          alert("Error! " + e.message);
        },
        complete: () => {
          console.info('Complete');
  
          // Reset input fields
          this.title = '';
          this.desc = '';
          this.painter = '';
          this.year = NaN;
          this.culturalOrigin = '';
          this.comments = '';
  
          this.setNumOfPaintingsFromDB();
          alert("Success! Painting added to MongoDB.");
        }
      });
    }
    
  }

  setNumOfPaintingsFromDB(){
    this.dataService.setNumberOfPaintingsInDatabase();
  }

  saveJsonPaintingsToMongoDB(){
    if (!this.JsonIsInitialized) {
      this.dataService.saveAllPaintingsToMongoDB();
      this.JsonIsInitialized = true;
      alert("Success! JSON paintings have been added to MongoDB.");
      this.setNumOfPaintingsFromDB();
    }
    else {
      alert("Alert! JSON paintings have already been added to MongoDB.");
    }
    
  }

  validateInputFields(): boolean {
    // Check if title is provided and of type string
    if (!this.title || typeof this.title !== 'string' || this.title.trim() === '') {
      alert('Error! Title must be provided and must be a non-empty string.');
      return false;
    }
  
    // Check if desc is provided and of type string
    if (!this.desc || typeof this.desc !== 'string' || this.desc.trim() === '') {
      alert('Error! Description must be provided and must be a non-empty string.');
      return false;
    }
  
    // Check if painter is provided and of type string
    if (!this.painter || typeof this.painter !== 'string' || this.painter.trim() === '') {
      alert('Error! Painter must be provided and must be a non-empty string.');
      return false;
    }
  
    // Check if year is provided and is a number and within the range of 1 to 9999
    if (typeof this.year !== 'number' || (this.year < 0 || this.year > 9999) && !isNaN(this.year) ) {

      alert('Error! Year must be a numeric value of 1 to 4 digits.');
      return false;
    }
  
    // All validations passed
    return true;
  }
  
}
