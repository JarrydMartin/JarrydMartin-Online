import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectItem } from 'src/app/models/project-item';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss'],
})
export class ProjectListItemComponent implements OnInit {
  @Input() projectItem: ProjectItem;
  @Output() closeSidenav: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
