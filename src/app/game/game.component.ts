import {Component, OnInit} from '@angular/core';
import {GameService} from '../game.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {


  public step: number;

  public isInGame: boolean;

  public score: Array<any>;

  public doors: Array<any>;

  constructor(private gameService: GameService, private router: Router) {

  }

  ngOnInit(): void {
    this.step = 1;
    this.setScore();
  }

  public clickOnHome() {
    this.router.navigate(['/home']);
  }

  public play(door?: any) {
    if (door === undefined || door.gift === undefined) {
      switch (this.step) {
        case 1: {
          this.playTheFirstStep();
          this.step++;
          break;
        }
        case 2: {
          this.playTheSecondtStep(door);
          this.step++;
          break;
        }
        case 3: {
          this.playThirdStep(door);
          this.step = 1;
          break;
        }
      }
    }

  }


  private playTheFirstStep() {
    this.gameService.createNewGame().subscribe((data: any) => {
      this.doors = data.doors;
      this.doors.forEach(item => {
        item.url = 'assets/DOOR.png';
      });

      this.isInGame = true;
    });
  }


  private playTheSecondtStep(door: any) {
    this.gameService.chooseDoorAndGiveOpportunity(door).subscribe((data: any) => {

      this.doors = data;

      this.setResourceImgUrl(this.doors);

      this.sortById(this.doors);

    });

  }


  private sortById(items) {
    items.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      } else if (a.id < b.id) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  private setResourceImgUrl(elements) {
    elements.forEach(item => {
      if (item.gift === 'GOAT') {
        item.url = 'assets/CABRA.jpg';
      } else if (item.gift === 'DOOR') {
        item.url = 'assets/DOOR.png';
      } else if (item.gift === 'CAR') {
        item.url = 'assets/AUTO.jpg';
      } else {
        item.url = 'assets/DOOR.png';
      }
    });
  }

  private playThirdStep(door: any) {
    this.gameService.chooseDoorAfterOpportunityWasGiven(door).subscribe((data: any) => {

      this.doors = data[0];

      this.setResourceImgUrl(this.doors);

      this.sortById(this.doors);

      this.setScore();

    });
  }

  private setScore() {
    this.gameService.getScore().subscribe((data: any) => {
      this.score = data;
    });
  }


}
