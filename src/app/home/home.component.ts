import { R3TargetBinder } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import * as Aos from 'aos';
import { Subject } from 'rxjs';
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ratio: number = 0.1;
  options = {
    root: null,
    rootMargin: '0px',
    threshold: this.ratio,
  };

  @Output() observe = new IntersectionObserver(this.handler, this.options);
  constructor() {}
  ngOnInit() {
    Aos.init();
  }
  handler(entries: any, obsever: any) {
    entries.forEach((entry: any) => {
      if (entry.intersectionRation > this.ratio) {
        console.log('Visible');
      } else {
        console.log('no visible');
      }
    });
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('customer-logos');
    });
  }

  // el: Element = document.getElementById('distribution');
}
