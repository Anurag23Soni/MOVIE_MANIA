import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-banner-slide',
  templateUrl: './main-banner-slide.component.html',
  styleUrls: ['./main-banner-slide.component.scss']
})
export class MainBannerSlideComponent implements OnInit {

  //variabels for main banner
  title = 'MovieMani';
  imageUrls: Array<any>;
  height: string = '500px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 20000;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = true;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  width: string = '100%';

  constructor() { }

  ngOnInit() {
    //main banner image url
    this.imageUrls = [
      { url: '../assets/image/slider/image1.jpg' },
      { url: '../assets/image/slider/image2.jpg'},
      { url: '../assets/image/slider/image3.jpg' }
    ];
  }

}
