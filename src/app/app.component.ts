import { Component } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'toolsets2021';

  constructor(
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
  addSingle() {
    this.messageService.add({
      severity: 'success',
      summary: 'Service Message',
      detail: 'Via MessageService',
    });
  }
}
