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
      name: "Zombie Brain",
      age: 6,
      photo:
        "https://www.liveabout.com/thmb/CjHAmYNMBVXrW79X32wiVMiK96c=/843x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Grumpy6-5ab87025312834003759518f.jpg"
    },
    {
      name: "Caroll is here",
      age: 6,
      photo:
        "https://runt-of-the-web.com/wordpress/wp-content/uploads/2017/02/cougar-cat-memes.jpg"
    },
    {
      name: "God is a cat",
      age: 6,
      photo:
        "https://runt-of-the-web.com/wordpress/wp-content/uploads/2017/02/cat-memes-meant-to-pet.png"
    },
    {
      name: "Lady Cat",
      age: 6,
      photo:
        "https://runt-of-the-web.com/wordpress/wp-content/uploads/2017/02/crazy-cat-lady.jpg"
    },
    {
      name: "Human Go back to sleep",
      age: 6,
      photo:
        "https://runt-of-the-web.com/wordpress/wp-content/uploads/2017/02/go-back-to-sleep.jpg"
    },
    {
      name: "Winter me",
      age: 6,
      photo:
        "https://runt-of-the-web.com/wordpress/wp-content/uploads/2017/02/november-me-vs-december-me.jpg"
    },
    {
      name: "Don't stop beliving",
      age: 6,
      photo:
        "https://www.liveabout.com/thmb/HDQFhxlW_FprTo-0W40PXqVTIBU=/605x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Grumpy14-5ab876851d6404003698c5ea.jpg"
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
