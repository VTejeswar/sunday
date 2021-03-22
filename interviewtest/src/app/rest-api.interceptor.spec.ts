import { TestBed } from '@angular/core/testing';

import { RestAPIInterceptor } from './rest-api.interceptor';

describe('RestAPIInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RestAPIInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RestAPIInterceptor = TestBed.inject(RestAPIInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
