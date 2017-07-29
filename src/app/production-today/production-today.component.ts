import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-today',
  templateUrl: './production-today.component.html',
  styleUrls: ['./production-today.component.scss']
})
export class ProductionTodayComponent implements OnInit {
  @Input() summary;

  constructor() { }

  ngOnInit() {
    console.log('yerrrp' + this.summary)
  }

}
