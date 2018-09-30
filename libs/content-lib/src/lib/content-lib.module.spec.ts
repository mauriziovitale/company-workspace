import { async, TestBed } from '@angular/core/testing';
import { ContentLibModule } from './content-lib.module';

describe('ContentLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContentLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContentLibModule).toBeDefined();
  });
});
