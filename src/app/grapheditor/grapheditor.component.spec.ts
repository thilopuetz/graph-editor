import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheditorComponent } from './grapheditor.component';

describe('GrapheditorComponent', () => {
  let component: GrapheditorComponent;
  let fixture: ComponentFixture<GrapheditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrapheditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapheditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
