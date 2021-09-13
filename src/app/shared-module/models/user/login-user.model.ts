export interface experience {
  imageURL: string;
  //1 for work 2 for education
  category: number;
  title: string;
  date: string;
  partOne: string;
  partTwo?: string;
  partThree?: string;
  link?: string;
  linkCover?: string;

}

export interface project {
  imageURL: string;
  title: string;
  blurb: string;
  link: string;
}

