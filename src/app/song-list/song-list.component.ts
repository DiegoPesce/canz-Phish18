import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { Song } from '../song.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

@Input() list : Song[];

  constructor(public http: HttpClient) { }

  ngOnInit() {
      this.http
      .get<Song[]>('https://my-json-server.typicode.com/malizia-g/hotel/songlist')
      .subscribe(data =>{
          this.list = data;
      });
  }
}
