import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CardComponent } from '../../shared/ui/card/card.component';

@Component({ selector:'app-landing', standalone:true, imports:[RouterLink, ButtonComponent, CardComponent], templateUrl:'./landing.component.html', styleUrls:['./landing.component.scss'], changeDetection:ChangeDetectionStrategy.OnPush })
export class LandingComponent implements AfterViewInit, OnDestroy {
  @ViewChild('landingRoot') root?: ElementRef<HTMLElement>;
  private observer?: IntersectionObserver;
  readonly features = [
    ['◈','One operational view','Bring access requests, practices, invoices, and audit evidence into one calm workspace.'],
    ['⌁','Decisions with context','Give managers the patient-safe context they need without exposing unnecessary records.'],
    ['♢','Audit-ready by design','Trace every approval and change with clear ownership, timestamps, and reason codes.'],
  ];
  readonly steps = ['Request','Manager','Security','Granted'];
  ngAfterViewInit(): void { if (typeof IntersectionObserver === 'undefined') return; this.observer = new IntersectionObserver((entries) => entries.filter((entry) => entry.isIntersecting).forEach((entry) => { entry.target.classList.add('is-visible'); this.animateCounter(entry.target); this.observer?.unobserve(entry.target); }), { threshold:.16 }); this.root?.nativeElement.querySelectorAll('.reveal').forEach((element) => this.observer?.observe(element)); }
  private animateCounter(entry: Element): void { const counter = entry.querySelector<HTMLElement>('[data-counter]') ?? (entry.hasAttribute('data-counter') ? entry as HTMLElement : null); if (!counter) return; const target = Number(counter.dataset['counter']); if (!Number.isFinite(target)) return; const suffix = counter.dataset['suffix'] ?? ''; if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { counter.textContent = `${target}${suffix}`; return; } const started = performance.now(); const duration = 1100; const tick = (now: number) => { const progress = Math.min((now - started) / duration, 1); const eased = 1 - Math.pow(1 - progress, 3); counter.textContent = `${(target * eased).toFixed(target % 1 ? 2 : 0)}${suffix}`; if (progress < 1) requestAnimationFrame(tick); }; requestAnimationFrame(tick); }
  ngOnDestroy(): void { this.observer?.disconnect(); }
}
