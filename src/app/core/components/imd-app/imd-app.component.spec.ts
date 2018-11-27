import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdAppComponent } from './imd-app.component';

describe('ImdAppComponent', () => {
  let component: ImdAppComponent;
  let fixture: ComponentFixture<ImdAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImdAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
