import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() term = new EventEmitter()

  constructor() { }

  detectedChanges(event:any)
  {
    this.term.emit(event)
  }

  ngOnInit(): void {
  }

}
