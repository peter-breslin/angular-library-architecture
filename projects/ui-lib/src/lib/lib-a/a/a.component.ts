import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'lib-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  configA:string;

  constructor(@Inject('config') public config:any) {

    this.configA = config.configuration.configA
  }

  ngOnInit(): void {
  }

}
