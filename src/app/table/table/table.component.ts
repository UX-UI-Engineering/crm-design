/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.sass"]
})
export class TableComponent implements OnInit {
    loopString = "Hello World. What a great day!"; // use to run a loop 'n' times

    tenants = [{
        name: "Jane Doe",
        contact: "janedoe@gmail.com",
        age: 32,
        property_address: "Montclair, NJ 07042, USA",
        rent: "$860.00",
        property_manager: "Jennifer Doe",
        status: "Basic"
    }];

    constructor() {

        // Preparing sample data
        const clone = { ...this.tenants };

        for (let _char of this.loopString) {
            this.tenants.push(clone[0]);
        }
    }

    ngOnInit(): void {
    }

}
