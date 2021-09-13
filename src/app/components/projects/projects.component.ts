import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/shared-module/models/user/login-user.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: project[] = [
    {
      title: "Day.Ly",
      blurb: "An IOS Application which usesNative React JS and expo to create an app that schedules pomodoro studysessions around your schedule. Top 25 Wolfram AlphaWinner at SD Hacks. View project for a demo!",
      imageURL: "https://cdn.discordapp.com/attachments/875067454525689877/885607510034251857/dayly_image.jpg",
      link: "https://devpost.com/software/day-ly-8qe3iz"
    },
    {
      title: "Leaflet",
      blurb: "A social media application inReactwith aFirebasebackend. Connects users through environmentallyconscious tasks and interacting with plant companions. WonWolfram Alpha Pro at Citrus Hacks. View project for a demo!",
      imageURL: "https://cdn.discordapp.com/attachments/875067454525689877/885607625545363506/unknown.png",
      link: "https://devpost.com/software/leaflet-uzh7ev"
    },
    {
      title: "John's Jeometry Jumble",
      blurb: "Game built in Java using GUI and a game engine API, first place Winner in Computer Science Final Project Competition",
      imageURL: "https://cdn.discordapp.com/attachments/705234290991956045/720490122054860840/unknown.png",
      link: "https://github.com/Wesley-T-Wang/Jon-s-Jeometry-Jumble"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
}

}
