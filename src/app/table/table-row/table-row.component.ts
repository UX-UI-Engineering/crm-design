/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "[app-table-row]",
    templateUrl: "./table-row.component.html",
    styleUrls: ["./table-row.component.sass"]
})
export class TableRowComponent implements OnInit {

    @Input("tenant") tenant;

    constructor() {
        console.log(this.tenant);
    }

    ngOnInit(): void {
    }

}
