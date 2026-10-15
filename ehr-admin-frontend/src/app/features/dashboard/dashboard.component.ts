import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({ selector: 'app-dashboard', standalone: true, template: '<main class="p-6"><h1 class="text-2xl font-semibold">EHR Admin Dashboard</h1></main>', changeDetection: ChangeDetectionStrategy.OnPush })
export class DashboardComponent {}
