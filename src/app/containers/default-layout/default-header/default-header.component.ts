import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  now: string = "";

  constructor(private classToggler: ClassToggleService) {
    super();
    setInterval(() => {
      this.now = new Date().toString().split('GMT')[0];
    }, 1);
  }
}
