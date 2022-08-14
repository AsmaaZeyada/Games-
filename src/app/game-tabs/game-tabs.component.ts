import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-tabs',
  templateUrl: './game-tabs.component.html',
  styleUrls: ['./game-tabs.component.scss']
})
export class GameTabsComponent implements OnInit {

  currentId:number = 0;
  allVideo:any[]=[]
  gameDetails:any={}
  screenshots:any[]=[]
  platform:number = 0;
  publisher:number = 0;
  show = false;

  constructor(private _GamesService:GamesService , private _ActivatedRoute:ActivatedRoute) { }

  getIdFormURL()
  {
    this.currentId =  this._ActivatedRoute.snapshot.params['id'];
  }

  getDetailsGame()
  {
    this._GamesService.getDetailsGame(this.currentId).subscribe({
      next: (response) =>
      {
        this.gameDetails = response;
        this.platform = this.gameDetails.parent_platforms.length
        this.publisher = this.gameDetails.publishers.length
        console.log(this.publisher);
      }
    })
  }

  getVideo(){
    this._GamesService.getVideo(this.currentId).subscribe({
      next: (response) =>
      {
        this.allVideo = response.results;
        console.log(this.allVideo);
        
      }
    })
  }

  getScreenshots(){
    this._GamesService.getScreenshots(this.currentId).subscribe({
      next: (response) =>
      {
        this.screenshots = response.results;
        console.log(this.screenshots);
      }
    })
  }

  ngOnInit(): void {
    this.getIdFormURL();
    this.getDetailsGame();
    this.getVideo();
    this.getScreenshots();
  }

}
