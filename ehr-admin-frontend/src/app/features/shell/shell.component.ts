import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { BadgeComponent } from '../../shared/ui/badge/badge.component';
import { SkeletonComponent } from '../../shared/ui/skeleton/skeleton.component';
@Component({ selector:'app-shell', standalone:true, imports:[RouterLink,RouterOutlet,NgClass,ButtonComponent,BadgeComponent,SkeletonComponent], templateUrl:'./shell.component.html', styleUrls:['./shell.component.scss'], changeDetection:ChangeDetectionStrategy.OnPush })
export class ShellComponent { collapsed=false; paletteOpen=false; notificationsOpen=false; dark=false; @HostListener('document:keydown.control.k',['$event']) openPalette(event: Event): void { event.preventDefault(); this.paletteOpen=true; } toggleTheme(): void { this.dark=!this.dark; document.documentElement.dataset['theme']=this.dark?'dark':''; } }
