import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-company-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() items: any;

  constructor() {}

  ngOnInit() {}
}
