import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent implements OnInit {
  @Input() id!: any;
  @Input() title!: string;
  @Input() description!: string;
  @Input() duration!: number;
  @Input() creationDate!: string;
  @Input() topRated!: boolean;
  @Output() delete = new EventEmitter<any>();

  deleteData(id: any) {
    this.delete.emit(id);
  }
  constructor() {}

  ngOnInit(): void {}
}
