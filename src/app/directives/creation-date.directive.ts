import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCreationDate]',
})
export class CreationDateDirective implements OnInit {
  @Input() appCreationDate!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const creationDate = new Date(this.appCreationDate);
    const today = new Date();
    const daysAgo = this.getDateXDaysAgo(14 ,today);

    if (creationDate > today) {
      this.el.nativeElement.style.border = '2px solid #009ECC';
    } 
    if(creationDate < today && creationDate >= daysAgo) {
      this.el.nativeElement.style.border = '2px solid #67a300';
    }
  }

  getDateXDaysAgo(numOfDays: number, date = new Date()) {
    const daysAgo = new Date(date.getTime());

    daysAgo.setDate(date.getDate() - numOfDays);

    return daysAgo;
  }
}
