import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { ToasterService } from "./core-module/services";
import { LoginService } from "./services";
import { Constants } from "./shared-module/constants/constants";
import { options, fullpage_api } from 'fullpage.js/dist/fullpage.extensions.min';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  config: options;
  fullpage_api: fullpage_api;
  aboutMeInView: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toaster: ToasterService,
    private route: ActivatedRoute
  ) {
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['intro', 'education', 'workExperience', 'projects', 'aboutMe', 'contact'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        this.aboutMeInView = true;
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        this.aboutMeInView = origin.index <= 5 && origin.index >= 0;
        console.log(origin.index);
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  ngOnInit(): void {

  }
}
