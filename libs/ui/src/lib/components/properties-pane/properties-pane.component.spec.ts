import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiesPaneComponent } from './properties-pane.component';

describe('PropertiesPaneComponent', () => {
  let component: PropertiesPaneComponent;
  let fixture: ComponentFixture<PropertiesPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertiesPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiesPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
