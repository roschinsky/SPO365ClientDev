import { Component, OnInit, Input } from "@angular/core";
import { O365Profile } from "../shared/model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  @Input()
  profile: O365Profile;

  constructor() {}

  ngOnInit() {}
}
