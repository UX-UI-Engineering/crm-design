import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ActionComponent } from "./button/action/action.component";
import { SidebarComponent } from "./navigation/sidebar/sidebar.component";
import { RightComponent } from "./area/right/right.component";
import { FilterComponent } from "./table/filter/filter.component";
import { ContainerComponent } from "./container/container.component";
import { TableActionsComponent } from "./table/table-actions/table-actions.component";
import { TableComponent } from "./table/table/table.component";
import { TableHeaderComponent } from './table/table-header/table-header.component';
import { TableRowComponent } from './table/table-row/table-row.component';

@NgModule({
    declarations: [
        AppComponent,
        ActionComponent,
        SidebarComponent,
        RightComponent,
        FilterComponent,
        ContainerComponent,
        TableActionsComponent,
        TableComponent,
        TableHeaderComponent,
        TableRowComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
