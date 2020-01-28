import { Component, OnInit } from "@angular/core";
import { DataService, listKitten } from "../data.service";

@Component({
  selector: "app-list-kitten",
  templateUrl: "./list-kitten.component.html",
  styleUrls: ["./list-kitten.component.scss"]
})
export class ListKittenComponent implements OnInit {
  kittens: listKitten[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getKitty()
      .subscribe((kittensData: listKitten[]) => (this.kittens = kittensData));
  }

  adopt(kitty) {
    this.dataService.updateUserKitty(kitty);
  }
}
