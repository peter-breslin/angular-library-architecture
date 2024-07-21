import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'lib-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor() { }

  date = moment.now();

  ngOnInit(): void {
  }

}
