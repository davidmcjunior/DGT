import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

export const getBaseUrl = (): string => {
  if (!environment.production) { return ''; }
  return '';
};

const providers = [
  { provide: 'API_URL', useFactory: getBaseUrl }
];

