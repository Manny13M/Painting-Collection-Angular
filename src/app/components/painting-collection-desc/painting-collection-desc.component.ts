import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-painting-collection-desc',
  templateUrl: './painting-collection-desc.component.html',
  styleUrls: ['./painting-collection-desc.component.scss'],
})
export class PaintingCollectionDescComponent  implements OnInit {

  paintingsCollcetionDesc: String = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.paintingsCollcetionDesc = this.dataService.getPaintingsDescription();
  }

}
