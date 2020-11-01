import { Component, ElementRef, OnInit, Renderer2, ViewChild } from "@angular/core";

@Component({
    selector: "app-right",
    templateUrl: "./right.component.html",
    styleUrls: ["./right.component.sass"]
})
export class RightComponent implements OnInit {

    @ViewChild("rightArea") rightArea: ElementRef<HTMLElement>;

    constructor(private renderer: Renderer2) { }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        const windowHeight = window.innerHeight;
        const requiredHeight = (windowHeight - 40) + "px";

        this.renderer.setStyle(this.rightArea.nativeElement, "height", requiredHeight);
    }

}