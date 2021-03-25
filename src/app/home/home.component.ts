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
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Subject } from 'rxjs';

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
  constructor(private router: Router) {}
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

  onDistribution() {
    this.router.navigate(['/distribution']);
  }
  onAbout() {
    this.router.navigate(['/about-us']);
  }

  ngAfterViewInit() {}

  // el: Element = document.getElementById('distribution');
}
