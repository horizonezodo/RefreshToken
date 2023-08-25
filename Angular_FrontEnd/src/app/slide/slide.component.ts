import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SlideInterface } from '../_model/slide-interface';
import { style, transition, trigger,animate, animation,
  keyframes,  
  useAnimation} from '@angular/animations';
@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '1300ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1300ms' }})]),
    ])
  ]
})

export class SlideComponent{
  @Input() slides: any;
  currentSlide = 0;
  constructor(){}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }
}
  export const fadeIn = animation([
    style({ opacity: 0 }), // start state
    animate('300ms', style({ opacity: 1 }))
  ]);

  export const fadeOut = animation([
    animate('300ms', style({ opacity: 0 }))
  ]);