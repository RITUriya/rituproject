import { CommonServiceService } from 'src/app/common-service.service';
import { NgModule } from '@angular/core';

import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { I18nModule } from './i18n/i18n.module';
import {
  TranslateCacheModule,
  TranslateCacheSettings,
  TranslateCacheService,
} from 'ngx-translate-cache';

import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { SelectLanguageComponent } from './select-language/select-language.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    UserDetailsComponent,
    HeaderComponent,
    FooterComponent,
    CompAComponent,
    CompBComponent,
    SelectLanguageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    GoogleMapsModule,
    I18nModule,
    TranslateModule.forRoot(),
    TranslateCacheModule.forRoot({
      cacheService: {
        provide: TranslateCacheService,
        useFactory: (
          translateService: TranslateService,
          translateCacheSettings: TranslateCacheSettings
        ) => {
          return new TranslateCacheService(
            translateService,
            translateCacheSettings
          );
        },
        deps: [TranslateService, TranslateCacheSettings],
      },
    }),
  ],
  providers: [
    SocialAuthService,
    CommonServiceService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '98438617968-rqg24thc8ns3r573mimn4h719t3o9fv8.apps.googleusercontent.com'
            ), // your client id
          },
        ],
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
