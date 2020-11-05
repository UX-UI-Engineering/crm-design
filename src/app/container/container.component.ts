/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from "@angular/core";

@Component({
    selector: "app-container",
    templateUrl: "./container.component.html",
    styleUrls: ["./container.component.sass"]
})
export class ContainerComponent implements OnInit {

    @ViewChild("appContainer") appContainer: ElementRef<HTMLElement>;
    @ViewChild("tableContainer") tableContainer: ElementRef<HTMLElement>;
    @ViewChild("tableContainerHeader") tableContainerHeader: ElementRef<HTMLElement>;

    @Input("parentHeight") parentHeight: number;
    @Input("rowTilesHeight") rowTilesHeight: number;

    constructor(private renderer: Renderer2) { }

    ngOnInit(): void {
    }

    ngAfterViewChecked(): void {
        this.setComponentHeight();
    }

    getTableHeaderHeight(): number {
        return this.tableContainerHeader.nativeElement.clientHeight;
    }

    getComponentTopPadding(): number {
        return parseFloat(this.appContainer.nativeElement.style.paddingTop);
    }

    setComponentHeight(): void {
        const bottomPadding = 40;
        const combinedMarginPadding = 60; // 60 is combined margin and padding of other components inside parent
        const requiredHeight = this.parentHeight - this.getTableHeaderHeight() - this.rowTilesHeight - bottomPadding - combinedMarginPadding;

        console.log("RH: " + requiredHeight);
        this.renderer.setStyle(this.tableContainer.nativeElement, "height", `${requiredHeight}px`);
    }

}
