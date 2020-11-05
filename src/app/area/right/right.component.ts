import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";

@Component({
    selector: "app-right",
    templateUrl: "./right.component.html",
    styleUrls: ["./right.component.sass"]
})
export class RightComponent implements OnInit {
    parentHeight: number;
    rowTilesHeight: number;

    @ViewChild("rowTiles") rowTiles: ElementRef<HTMLElement>;
    @ViewChild("rightArea") rightArea: ElementRef<HTMLElement>;

    constructor(private renderer: Renderer2) { }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        this.setComponentHeight();
        this.rowTilesHeight = this.rowTiles.nativeElement.clientHeight;
    }

    setComponentHeight(): void {
        const bottomPadding = 40;
        const windowHeight = window.innerHeight;
        const requiredHeight = windowHeight - bottomPadding;

        this.parentHeight = requiredHeight;
        this.renderer.setStyle(this.rightArea.nativeElement, "height", `${requiredHeight}px`);
    }

}
