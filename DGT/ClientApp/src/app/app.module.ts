import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectValueDirective } from './directives/forms/select-value.directive';
import { SharedModule } from './components/shared/shared.module';



@NgModule({
    declarations: [
        AppComponent,
        SelectValueDirective
    ],
    imports: [
        BrowserModule,
        SharedModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
