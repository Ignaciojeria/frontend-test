import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class GameService {

  private static readonly domain = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  public createNewGame(): Observable<any> {
    return this.http.post<any>(GameService.domain + '/createNewGame', null, httpOptions);
  }

  public chooseDoorAndGiveOpportunity(chooseDoorRequest: any): Observable<any> {
    return this.http.post<any>(GameService.domain + '/chooseDoorAndGiveOpportunity', chooseDoorRequest, httpOptions);
  }

  public chooseDoorAfterOpportunityWasGiven(chooseDoorRequest: any): Observable<any> {
    return this.http.post<any>(GameService.domain + '/chooseDoorAfterOpportunityWasGiven', chooseDoorRequest, httpOptions);
  }

  public getScore(): Observable<any> {
    return this.http.get(GameService.domain + '/game/getScore', httpOptions);
  }


}
