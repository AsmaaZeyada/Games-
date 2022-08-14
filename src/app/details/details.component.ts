import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  gameRating:number = 0;
  currentId:number = 0;
  gameDetails:any={}
  isLoading:boolean= false;

  constructor(private _GamesService:GamesService , private _ActivatedRoute:ActivatedRoute) { }

  getIdFormURL()
  {
    this.currentId =  this._ActivatedRoute.snapshot.params['id'];
  }

  getDetailsGame()
  {
    this.isLoading = true;
    this._GamesService.getDetailsGame(this.currentId).subscribe({
      next: (response) =>
      {
        console.log(response);
        this.gameDetails = response;
        this.isLoading = false;
        setTimeout(() => {
          this.gameRating = this.gameDetails.metacritic;
        }, 1000);
      }
    })
  }

  getColor(value:number) :string
  {
    if(value > 75)
    {
      return "#5ee432"
    }
    else if (value > 50)
    {
      return "#fffa38"
    }
    else if (value > 30)
    {
      return "#f7aa38"
    }
    else 
    {
      return "#ef4655"
    }
  }


  ngOnInit(): void {
    this.getIdFormURL();
    this.getDetailsGame()
  }

}
