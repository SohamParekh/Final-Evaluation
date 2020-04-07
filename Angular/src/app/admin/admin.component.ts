import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../app.animation';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  animations: [slideInAnimation]
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
