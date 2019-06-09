import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) {
  }

  public clickOnGame() {
    this.router.navigate(['/game']);
  }

  public clickOnList() {
    this.router.navigate(['/game-list']);
  }

}


