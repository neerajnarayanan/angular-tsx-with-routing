import { Component, OnInit } from "@angular/core";
import { ProfileService } from '../common/services/profile.service';

@Component({
    selector: "show-all",
    templateUrl: "./list.component.html",
})

export class ShowAll {
    profileList: any[] = [];
    constructor(private profileService: ProfileService) {
        console.log("Show all calling");
    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.profileList = this.profileService.profileData;
        console.log("list ::", this.profileList);

    }

}