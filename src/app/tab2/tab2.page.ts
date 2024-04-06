// *** Painting List Tab ***

import { Component, OnInit } from '@angular/core';
import { ExpressMongoService } from '../express-mongo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  outMsg: any; 
  outRecords: any = []; //paintings

  constructor(
    private mongo: ExpressMongoService, 
    private router: Router) {}

  ngOnInit() {
    this.getAllPaintings();
  }

  getAllPaintings() {
    this.mongo.getAllPaintings().subscribe({
      next: (data: any) => { 
        console.log(data);
        this.outRecords = data;
      },
      error: (e) => { 
        console.error(e);
        this.outMsg = e.message; 
      },
      complete: () => {
        console.info('Complete');
      }
    });
  }

  selectPainting(painting: any){
    // Use queryParams to pass the selected item's data
    this.router.navigate(['/painting'], { queryParams: { paintingData: JSON.stringify(painting) } });
  }
}
