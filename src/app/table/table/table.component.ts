/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.sass"]
})
export class TableComponent implements OnInit {
    numbers: number[];
    constructor() {
        this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    }

    ngOnInit(): void {
    }

}
