import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSideBarComponent } from './logo-side-bar.component';

describe('LogoSideBarComponent', () => {
  let component: LogoSideBarComponent;
  let fixture: ComponentFixture<LogoSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
