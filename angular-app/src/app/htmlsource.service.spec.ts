import { TestBed } from '@angular/core/testing';

import { HtmlsourceService } from './htmlsource.service';

describe('HtmlsourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtmlsourceService = TestBed.get(HtmlsourceService);
    expect(service).toBeTruthy();
  });
});
