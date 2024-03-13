import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchPhotosComponent } from './fetch-photos.component';

describe('FetchPhotosComponent', () => {
  let component: FetchPhotosComponent;
  let fixture: ComponentFixture<FetchPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FetchPhotosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
