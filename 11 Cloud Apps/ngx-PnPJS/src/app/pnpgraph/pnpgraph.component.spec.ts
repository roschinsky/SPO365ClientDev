import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnPGraphComponent } from './pnpgraph.component';

describe('PnpgraphComponent', () => {
  let component: PnPGraphComponent;
  let fixture: ComponentFixture<PnPGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnPGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnPGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
