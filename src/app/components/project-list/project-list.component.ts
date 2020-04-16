import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectItem } from 'src/app/models/project-item';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectlistComponent implements OnInit {
  @Output() closeSidenav: EventEmitter<void> = new EventEmitter();
  projectItems: ProjectItem[];

  constructor() {}

  ngOnInit(): void {
    this.projectItems = [
      {
        name: 'Home',
        link: '',
      },
      {
        name: 'Shopping Companion',
        link: '/shopping-companion',
      },
    ];
  }
}
