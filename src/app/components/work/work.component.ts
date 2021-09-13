import { Component, OnInit } from '@angular/core';
// import { link } from 'fs';
import { experience } from 'src/app/shared-module/models/user/login-user.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  experiences: experience[] = [
    {
      category:1,
      title: "Software Engineer at Ascend Learning",
      imageURL: "https://3720kn9sx533261iq3g1lnxj-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/AscendLearningFeaturedImage-scaled.jpg",
      partOne: "Created a project using Angular, .Net core, C# , SQL Databases, Postman, and Heroku to design and deploy a website that allows users to join bulletin rooms and make posts and polls using the strawpoll api",
      partTwo: "Supported the development and deployment of the company assessment software, working on tickets and following industry work environment including scrum meetings and deployment deadlines",
      date: "June 2021 - Present",
      link: "https://wesley-t-wang.github.io/BulletinBuddy/signup",
      linkCover: "Try out my project here!"
    },
    {
      category:1,
      title: "Programming Instructor at Whizara",
      imageURL: "https://cdn.discordapp.com/attachments/705234290991956045/885584460026892360/unknown.png",
      partOne: "Taught full courses on HTML, CSS, Javascript, Java, Python, and C++ in 1 on 1 settings and classes of up to 20 students",
      partTwo: "Contracted by a variety of middle and high schools including Silicon Valley High School and Harker K-12",
      date: "May 2020 - June 2021",
      link: "https://www.whizara.com/",
      linkCover: "Check out my profile here!"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  goToLink(url: string){
    window.open(url, "_blank");
}

}
