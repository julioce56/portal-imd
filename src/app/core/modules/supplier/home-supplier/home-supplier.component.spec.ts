import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSupplierComponent } from './home-supplier.component';

describe('HomeSupplierComponent', () => {
  let component: HomeSupplierComponent;
  let fixture: ComponentFixture<HomeSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
