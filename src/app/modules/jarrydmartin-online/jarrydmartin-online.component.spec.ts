import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JarrydmartinOnlineComponent } from './jarrydmartin-online.component';

describe('JarrydmartinOnlineComponent', () => {
  let component: JarrydmartinOnlineComponent;
  let fixture: ComponentFixture<JarrydmartinOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JarrydmartinOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JarrydmartinOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
