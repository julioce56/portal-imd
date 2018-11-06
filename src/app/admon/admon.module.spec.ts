import { AdmonModule } from './admon.module';

describe('AdmonModule', () => {
  let admonModule: AdmonModule;

  beforeEach(() => {
    admonModule = new AdmonModule();
  });

  it('should create an instance', () => {
    expect(admonModule).toBeTruthy();
  });
});
