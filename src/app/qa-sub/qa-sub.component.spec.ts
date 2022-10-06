import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaSubComponent } from './qa-sub.component';

describe('QaSubComponent', () => {
  let component: QaSubComponent;
  let fixture: ComponentFixture<QaSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
