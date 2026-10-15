import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<main [@routeTransition]="outlet.activatedRoute.url"><router-outlet #outlet="outlet" /></main>',
  animations: [trigger('routeTransition', [transition('* <=> *', [style({ opacity: 0, transform: 'translateY(8px)' }), animate('280ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))])])],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
