import { Component } from '@angular/core';

/**
 * Componente principal da aplicação.
 *
 * Este componente representa a estrutura principal da aplicação Angular.
 *
 * @example
 * <app-root></app-root>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Título da aplicação.
   */
  title = 'Agenda';

}
