import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-stat-tile',
  standalone: true,
  template: `<app-card [interactive]="true"><div class="tile"><span class="tile__icon">{{ icon }}</span><span class="tile__label">{{ label }}</span><strong>{{ value }}</strong><small [class.positive]="positive">{{ change }}</small></div></app-card>`,
  styles: [`.tile { display:grid; gap:.35rem; } .tile__icon { width:2.25rem; height:2.25rem; display:grid; place-items:center; border-radius:.75rem; background:var(--color-primary-100); font-size:1.1rem; } .tile__label, small { color:var(--color-text-muted); font-size:.78rem; } strong { font:700 1.75rem var(--font-display); } .positive { color:var(--color-success); }`],
  imports: [CardComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatTileComponent {
  @Input() icon = '◌';
  @Input() label = '';
  @Input() value = '';
  @Input() change = '';
  @Input() positive = true;
}
