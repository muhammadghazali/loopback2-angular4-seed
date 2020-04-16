import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "app works!";
  results: object;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get("http://localhost:3000").subscribe((data) => {
      console.log("data", data);
      console.log("xxx", data);

      this.results = data;
    });
  }
}
