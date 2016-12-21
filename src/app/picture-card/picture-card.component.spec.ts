/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { screenshot } from 'karma-nightmare';

import { PictureCardComponent } from './picture-card.component';

describe('PictureCardComponent', () => {
  let component: PictureCardComponent;
  let fixture: ComponentFixture<PictureCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule.forRoot() ],
      declarations: [ PictureCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureCardComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should display inputs properties', (done) => {
    component.headerTitle = 'It\'s my favorite picture';
    component.avatarURL = '/base/src/assets/avatar.png';
    component.pictureURL = '/base/src/assets/sample_picture.jpg';
    fixture.detectChanges();
    const titleElm = fixture.debugElement.query(By.css('md-card-title')).nativeElement as HTMLElement;
    expect(titleElm.textContent.trim()).toBe('It\'s my favorite picture');
    screenshot('snapshot/PictureCardComponent.png').then(done);
  });
});

