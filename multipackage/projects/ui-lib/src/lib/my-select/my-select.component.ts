import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css']
})
export class MySelectComponent implements OnInit {

  @Input() items: { text: string, value: any }[];
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

}
