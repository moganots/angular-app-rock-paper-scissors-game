import { Component, OnInit } from '@angular/core';
import { TestData } from 'src/app/shared/test-data/test-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  gameChoices = TestData.getgameChoices();

  constructor() { }

  ngOnInit(): void {
  }

}
