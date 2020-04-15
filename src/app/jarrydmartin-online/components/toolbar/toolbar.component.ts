import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() disableButton: boolean;
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  setButtonClass() {
    let toolbarClasses = {
      'dont-display-button': this.disableButton,
      'display-button': !this.disableButton,
    };
    return toolbarClasses;
  }
}
