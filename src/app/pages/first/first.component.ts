import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  headers = ['1', '2', '3'];
  rows = ['1', '2', '3'];

  constructor() { }

  ngOnInit(): void {
  }

  addColumn(): void {
    this.headers.push('X');
  }

  addRow(): void{
    this.rows.push('X');
  }

}
