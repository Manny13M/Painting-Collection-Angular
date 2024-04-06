import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ExpressMongoService } from 'src/app/express-mongo.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.page.html',
  styleUrls: ['./painting.page.scss'],
})
export class PaintingPage implements OnInit {

  painting: any;

  constructor(
    private activeRoute: ActivatedRoute, 
    private router: Router,
    private mongo: ExpressMongoService,
    private dataService: DataService) { 
      this.getPaintingFromDatabase();
    }

  ngOnInit() {}

  getPaintingFromDatabase() {
    var passedPainting = this.activeRoute.snapshot.queryParams['paintingData'];

    if (passedPainting) {
      this.painting = JSON.parse(passedPainting);

      this.mongo.getPaintingById(this.painting._id).subscribe({
        next: (data: any) => { 
          console.log(data);
          this.painting = data;
        },
        error: (e) => { 
          console.error(e);
        },
        complete: () => {
          console.info('Complete');
        }
      });
    }
  }

  updatePainting() {
    if(this.validateInputFields()) {
      this.mongo.updatePainting(this.painting._id, this.painting).subscribe({
        next: (data: any) => { 
          console.log(data);
        },
        error: (e) => { 
          console.error(e);
          alert("Error! " + e.message);
        },
        complete: () => {
          console.info('Complete');
          alert("Success! Painting updated in MongoDB.");
        }
      });
    }
  }

  deletePainting(){
    this.mongo.deletePaintingById(this.painting._id).subscribe({
      next: (data: any) => { 
        console.log(data);
      },
      error: (e) => { 
        console.error(e);
      },
      complete: () => {
        console.info('Complete');
        this.setNumOfPaintingsFromDB();
        alert("Success! Painting with id " +  this.painting._id + " deleted from MongoDB.");
      }
    });
  }

  goToTab2(){
    this.painting = null;
    this.router.navigate(['/tabs/tab2']);
  }

  setNumOfPaintingsFromDB(){
    this.dataService.setNumberOfPaintingsInDatabase();
  }

  validateInputFields(): boolean {
    // Check if title is provided and of type string
    if (!this.painting.title || typeof this.painting.title !== 'string' || this.painting.title.trim() === '') {
      alert('Error! Title must be provided and must be a non-empty string.');
      return false;
    }
  
    // Check if desc is provided and of type string
    if (!this.painting.desc || typeof this.painting.desc !== 'string' || this.painting.desc.trim() === '') {
      alert('Error! Description must be provided and must be a non-empty string.');
      return false;
    }
  
    // Check if painter is provided and of type string
    if (!this.painting.painter || typeof this.painting.painter !== 'string' || this.painting.painter.trim() === '') {
      alert('Error! Painter must be provided and must be a non-empty string.');
      return false;
    }
  
    // Check if year is provided and is a number and within the range of 1 to 9999
    if (typeof this.painting.year !== 'number' || (this.painting.year < 0 || this.painting.year > 9999) && !isNaN(this.painting.year) ) {

      alert('Error! Year must be a numeric value of 1 to 4 digits.');
      return false;
    }
  
    // All validations passed
    return true;
  }

}
