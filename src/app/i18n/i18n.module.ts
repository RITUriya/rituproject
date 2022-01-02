import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  TranslateCacheModule,
  TranslateCacheSettings,
  TranslateCacheService,
} from 'ngx-translate-cache';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: translateLoaderFactory,
        deps: [TranslateService, TranslateCacheSettings],
      },
      cacheMechanism: 'Cookie',
    }),
  ],
  exports: [TranslateModule],
})
export class I18nModule {
  constructor(
    translate: TranslateService,
    translateCacheService: TranslateCacheService
  ) {
    translate.addLangs(['en', 'fr']);
    //const browserLang = translate.getBrowserLang();
    const browserLang =
      translateCacheService.getCachedLanguage() && translate.getBrowserLang();
    translate.use(browserLang?.match('/en/fr') ? browserLang : 'fr');
  }
}

export function translateLoaderFactory(
  httpClient: HttpClient,
  translateService: TranslateService,
  translateCacheSettings: TranslateCacheSettings
) {
  //return new TranslateHttpLoader(httpClient);
  return new TranslateCacheService(translateService, translateCacheSettings);
}
