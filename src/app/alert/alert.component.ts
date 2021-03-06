import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  @Input() public messages: any;
  @Output() close = new EventEmitter<void>();
  constructor() {}
  onClose() {
    this.close.emit();
  }
  ngOnInit(): void {}
}
