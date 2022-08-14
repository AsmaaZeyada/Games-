import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) { }

  getAllGames(sort:string):Observable<any>
  {
    return this.http.get(`https://api.rawg.io/api/games?key=fd16b5bded274dacbad95f085854bdfd&ordering=${sort}&page_size=40`)
  }

  getPageNumber(page:number):Observable<any>
  {
    return this.http.get(`https://api.rawg.io/api/games?key=fd16b5bded274dacbad95f085854bdfd&ordering=${page}&page_size=40`)
  }

  searchGames(sort:string , word?:string):Observable<any>
  {
    return this.http.get(`https://api.rawg.io/api/games?key=fd16b5bded274dacbad95f085854bdfd&ordering=${sort}&page_size=40&search=${word}`)
  }

  getDetailsGame(id:number):Observable<any>
  {
    return this.http.get(`https://api.rawg.io/api/games/${id}?key=fd16b5bded274dacbad95f085854bdfd`)
  }

  getVideo(id:number):Observable<any>
  {
    return this.http.get(`https://api.rawg.io/api/games/${id}/movies?key=fd16b5bded274dacbad95f085854bdfd`)
  }

  getScreenshots(id:number):Observable<any>
  {
    return this.http.get(`https://api.rawg.io/api/games/${id}/screenshots?key=fd16b5bded274dacbad95f085854bdfd`)
  }
}
