import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { TestJhipsterOnline3SharedModule, UserRouteAccessService } from './shared';
import { TestJhipsterOnline3HomeModule } from './home/home.module';
import { TestJhipsterOnline3AdminModule } from './admin/admin.module';
import { TestJhipsterOnline3AccountModule } from './account/account.module';
import { TestJhipsterOnline3EntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        TestJhipsterOnline3SharedModule,
        TestJhipsterOnline3HomeModule,
        TestJhipsterOnline3AdminModule,
        TestJhipsterOnline3AccountModule,
        TestJhipsterOnline3EntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class TestJhipsterOnline3AppModule {}
