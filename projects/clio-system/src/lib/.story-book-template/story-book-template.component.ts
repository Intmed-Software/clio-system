import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cs-story-book-template',
  templateUrl: './story-book-template.component.html',
  styleUrls: ['./story-book-template.component.sass']
})
export class StoryBookTemplateComponent implements OnInit {

  @Input() api!: string
  @Input() componentSelector!: string

  constructor() { }

  ngOnInit(): void {
  }
}
