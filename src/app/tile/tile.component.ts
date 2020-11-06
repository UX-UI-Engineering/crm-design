/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "app-tile",
    templateUrl: "./tile.component.html",
    styleUrls: ["./tile.component.sass"]
})
export class TileComponent implements OnInit {
    @Input("title") title: string;
    @Input("number") number: number;
    @Input("stat") stat: string;
    @Input("statColor") statColor: string;
    @Input("modifier") modifier: string;

    constructor() { }

    ngOnInit(): void {
    }

}
