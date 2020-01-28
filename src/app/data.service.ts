import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface listKitten {
  name: string;
  age: number;
  photo: string;
}

@Injectable({
  providedIn: "root"
})
export class DataService {
  kittens: listKitten[] = [
    {
      name: "tyrion",
      age: 6,
      photo:
        "https://www.thelocal.no/userdata/images/article/6c9b4833bf67b7b021446a18ec35dce7d33595f12d692cfab0677d6d7fb6a2b6.jpg"
    },
    {
      name: "Arya",
      age: 6,
      photo:
        "https://www.thelocal.no/userdata/images/article/6c9b4833bf67b7b021446a18ec35dce7d33595f12d692cfab0677d6d7fb6a2b6.jpg"
    },
    {
      name: "Bran",
      age: 6,
      photo:
        "https://www.thelocal.no/userdata/images/article/6c9b4833bf67b7b021446a18ec35dce7d33595f12d692cfab0677d6d7fb6a2b6.jpg"
    }
  ];

  userKittens: listKitten[] = [];

  public getKitty() {
    let kittyObservable = new Observable(observer => {
      observer.next(this.kittens);
    });
    return kittyObservable;
  }

  public getUserKitty() {
    let userKittyObservable = new Observable(observer => {
      observer.next(this.userKittens);
    });
    return userKittyObservable;
  }

  public updateUserKitty(data) {
    this.userKittens.push(data);
    let index = this.kittens.indexOf(data);
    this.kittens.splice(index, 1);
  }

  public updateKitty(data) {
    this.kittens.push(data);
  }

  constructor() {}
}
