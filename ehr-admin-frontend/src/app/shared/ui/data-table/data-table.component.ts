import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-table',
  standalone: true,
  template: `<div class="table-wrap"><table><thead><tr><th *ngFor="let column of columns">{{ column }}</th></tr></thead><tbody><ng-content /></tbody></table></div>`,
  styles: [`.table-wrap { overflow:auto; border:1px solid var(--color-border); border-radius:var(--radius-lg); background:var(--color-surface); } table { width:100%; border-collapse:collapse; } th,td { padding:.9rem 1rem; text-align:left; border-bottom:1px solid var(--color-border); white-space:nowrap; } th { color:var(--color-text-muted); background:var(--color-surface-muted); font-size:.75rem; text-transform:uppercase; letter-spacing:.06em; }`],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataTableComponent { @Input() columns: string[] = []; }
