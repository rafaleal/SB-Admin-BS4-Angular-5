import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function createApollo(httpLink: HttpLink) {
    return {
        link: httpLink.create({uri: 'https://localhost:3000/graphql'}),
        cache: new InMemoryCache(),
    };
}

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ApolloModule,
        HttpLinkModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        RouterModule,
        FormsModule,
    ],
    declarations: [AppComponent],
    providers: [
        AuthGuard,
        {
            provide: APOLLO_OPTIONS,
            useFactory: createApollo,
            deps: [HttpLink]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
