import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-number-of-paintings',
  templateUrl: './number-of-paintings.component.html',
  styleUrls: ['./number-of-paintings.component.scss'],
})
export class NumberOfPaintingsComponent  implements OnInit {

  numberOfPaintings: number = 0; //In DB

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscribeToNumberOfPaintings();
  }

  subscribeToNumberOfPaintings() {
    this.dataService.numberOfPaintingsInDatabaseAsObserver.subscribe (
      numberOfPaintings => { this.numberOfPaintings = numberOfPaintings; }
    );
  }

}
