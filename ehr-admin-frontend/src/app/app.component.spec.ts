import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('creates the standalone root component', async () => {
    await TestBed.configureTestingModule({ imports: [AppComponent] }).compileComponents();
    expect(TestBed.createComponent(AppComponent).componentInstance).toBeTruthy();
  });
});
