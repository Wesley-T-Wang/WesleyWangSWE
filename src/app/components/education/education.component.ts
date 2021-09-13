import { Component, OnInit } from '@angular/core';
import { experience } from 'src/app/shared-module/models/user/login-user.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  edu :experience = {
    category:2,
    title: "University of California San Diego",
    imageURL: "https://ucsdnews.ucsd.edu/news_uploads/Resized_Geisel_Library_08.31.jpg",
    partOne: "3rd year student pursuing a Bachelor of Science degree in Computer Engineering",
    date: "September 2019 - June 2023"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
