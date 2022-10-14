import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '@core/services/authentication.service';

import { HeaderComponent } from './header/header.component';
import { LayoutDefaultComponent } from './layout-default.component';

describe('LayoutDefaultComponent', () => {
  let component: LayoutDefaultComponent;
  let fixture: ComponentFixture<LayoutDefaultComponent>;
  let authenticationTestingService = jasmine.createSpyObj<AuthenticationService>(['logout']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LayoutDefaultComponent,
        HeaderComponent
      ],
      imports: [RouterTestingModule],
      providers: [{ provide: AuthenticationService, useValue: authenticationTestingService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
