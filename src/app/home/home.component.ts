import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allGames:any[]=[]
  allSort:string = "name released added created updated rating metacritic";
  sortList:string[]=this.allSort.split(' ');
  valueSort:string ="";
  term:string = "";
  isLoading:boolean= false;

  constructor(private _GamesService:GamesService) { }

  getAllGames()
  {
    this.isLoading = true;
    this._GamesService.getAllGames(' ').subscribe({
      next: (response) =>
      {
        this.allGames = response.results
        this.isLoading = false;
      }
    })
  }

  sortGames(event:any)
  {
    this.isLoading = true;
    this.valueSort =event.target.value;
    if ( this.valueSort == " ")
    {
      this.getAllGames();
      this.isLoading = false;
    }
    else 
    {
      this._GamesService.getAllGames(this.valueSort).subscribe({
        next: (response) => 
        {
          console.log(response.results);
          this.allGames = response.results;
          this.isLoading = false;
        }
      })
    }
  }

  searchGames(event:any)
  {
    this.isLoading = true;
    let value = event.target.value
    if ( this.valueSort == " ")
    {
      this._GamesService.searchGames(" ",value).subscribe({
        next: (response) => 
        {
          this.allGames = response.results;
          this.isLoading = false;
        }
      })
    }
    else 
    {
      this._GamesService.searchGames(this.valueSort,value).subscribe({
        next: (response) => 
        {
          this.allGames = response.results;
          this.isLoading = false;
        }
      })
    }

  }

  ngOnInit(): void {
    this.getAllGames()    
  }

}
