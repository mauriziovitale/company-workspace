import { async, TestBed } from '@angular/core/testing';
import { ProcessLibModule } from './process-lib.module';

describe('ProcessLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProcessLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProcessLibModule).toBeDefined();
  });
});
