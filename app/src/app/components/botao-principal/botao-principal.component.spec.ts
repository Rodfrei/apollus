import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoPrincipalComponent } from './botao-principal.component';

describe('BotaoPrincipalComponent', () => {
  let component: BotaoPrincipalComponent;
  let fixture: ComponentFixture<BotaoPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoPrincipalComponent]
    });
    fixture = TestBed.createComponent(BotaoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
