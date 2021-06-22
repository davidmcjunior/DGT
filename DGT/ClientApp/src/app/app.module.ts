import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { CrashEventInMemoryDataService } from './services/crash-event/test/crash-event-in-memory-test.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        // HttpClientInMemoryWebApiModule.forRoot(
        //     CrashEventInMemoryDataService, {dataEncapsulation: false}
        // ),
        AppRoutingModule
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
