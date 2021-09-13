import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  volleyball: boolean = false;
  cats: boolean = false;
  keyboards: boolean = false;
  @Input() isAlive: boolean;

  constructor(private cd: ChangeDetectorRef) {
    // this.selectCats();
    // this.selectVolleyball();

   }

  ngOnInit(): void {
    this.selectVolleyball();
    console.log(this.volleyball, this.cats, this.keyboards);
    this.cd.detectChanges();
  }

  get activeCard(): number{
    if(this.volleyball){
      return 1;
    } else if (this.cats){
      return 2;
    } else {
      return 3;
    }
  }

  selectVolleyball(): void{
    this.volleyball = true;
    this.cats = false;
    this.keyboards = false;
  }

  selectCats(): void{
    this.volleyball = false;
    this.cats = true;
    this.keyboards = false;
  }

  selectKeyboards(): void{
    this.volleyball = false;
    this.cats = false;
    this.keyboards = true;
  }



}
