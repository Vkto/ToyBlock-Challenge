import { Component, Injectable, Input, OnInit } from '@angular/core';
import { IBlock } from 'src/models/IBlock';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
@Injectable({
  providedIn: "root"
})

class BlockComponent implements OnInit {
@Input() block: IBlock;

  ngOnInit() {
  }

}
export{BlockComponent }