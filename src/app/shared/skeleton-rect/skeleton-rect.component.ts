import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'contacts-list-skeleton-rect',
  template: ``,
  host: {
    'class': 'skeleton-pulse'
  },
  styleUrls: ['./skeleton-rect.component.scss'],
})
export class SkeletonRectComponent implements OnInit {

  width: string;
  height: string;
  className: string;

  constructor(private host: ElementRef<HTMLElement>) { }

  ngOnInit() {
    const host = this.host.nativeElement;

    if (this.className) {
      host.classList.add(this.className);
    }

    host.style.setProperty('--skeleton-rect-width', this.width ?? '23%');
    host.style.setProperty('--skeleton-rect-height', this.height ?? '350px');
  }

}
