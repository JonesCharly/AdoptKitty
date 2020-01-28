import { Component, OnInit } from "@angular/core";
import { DataService, listKitten } from "../data.service";

@Component({
  selector: "app-user-kitten",
  templateUrl: "./user-kitten.component.html",
  styleUrls: ["./user-kitten.component.scss"]
})
export class UserKittenComponent implements OnInit {
  constructor(private dataService: DataService) {}
  userKitty: listKitten[] = [];

  ngOnInit() {
    this.dataService
      .getUserKitty()
      .subscribe((kittyData: listKitten[]) => (this.userKitty = kittyData));
  }
}
