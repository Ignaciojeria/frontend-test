import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  public gameList: Array<any>;

  public pages: Array<number>;

  private activePage: number;

  constructor(private gameservice: GameService, private router: Router) {
  }

  ngOnInit() {

    this.activePage = 0;

    this.gameservice.findAllGames(0).subscribe(data => {
      this.gameList = data;
    });

    this.gameservice.getGamePages().subscribe(data => {
      this.pages = Array(data).fill(0).map((x, i) => i);
      console.log(this.pages);
    });

  }

  public clickOnSomePage(page: number) {
    this.activePage = page;
    this.gameservice.findAllGames(this.activePage).subscribe(data => {
      this.gameList = data;
    });
  }

  public clickOnPreviusPage() {
    if (this.activePage === 0) {
      return;
    }
    this.activePage--;
    this.gameservice.findAllGames(this.activePage).subscribe(data => {
      this.gameList = data;
    });
  }

  public clickOnNextPage() {

    if (this.activePage === this.pages.length - 1) {
      return;
    }
    this.activePage++;
    this.gameservice.findAllGames(this.activePage).subscribe(data => {
      this.gameList = data;
    });
  }

  public clickOnHome() {
    this.router.navigate(['/home']);
  }

}
