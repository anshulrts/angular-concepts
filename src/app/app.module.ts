import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltinDirectiveComponent } from './builtin-directive/builtin-directive.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventHandlingComponent } from './event-handling/event-handling.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltinDirectiveComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventHandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
