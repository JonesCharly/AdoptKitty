import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { DataService } from "../data.service";

@Component({
  selector: "app-create-kitten",
  templateUrl: "./create-kitten.component.html",
  styleUrls: ["./create-kitten.component.scss"]
})
export class CreateKittenComponent implements OnInit {
  catForm = new FormGroup({
    name: new FormControl(""),
    age: new FormControl(""),
    photo: new FormControl("")
  });
  constructor(private dataService: DataService) {}

  onSubmit() {
    this.dataService.updateKitty(this.catForm.value);
    this.catForm.reset();
  }

  ngOnInit() {}
}
