import { Component, OnInit, Input, Optional } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.css']
})
export class PictureCardComponent implements OnInit {

  @Input() headerTitle: string;
  @Optional() @Input() subtitle: string;
  @Input() avatarURL: string;
  @Input() pictureURL: string;
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}

