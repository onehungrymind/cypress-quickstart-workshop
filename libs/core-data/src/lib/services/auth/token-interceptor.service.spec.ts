import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenInterceptor = TestBed.inject(TokenInterceptor);
    expect(service).toBeTruthy();
  });
});
