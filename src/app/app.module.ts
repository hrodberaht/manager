import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PanelComponent } from './panel/panel.component';
import { MenuPanelComponent } from './panel/menu-panel/menu-panel.component';
import { WindowPanelComponent } from './panel/window-panel/window-panel.component';
import {CheckingComponent } from './panel/window-panel/checking/checking.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PanelComponent,
    MenuPanelComponent,
    WindowPanelComponent,
    CheckingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
