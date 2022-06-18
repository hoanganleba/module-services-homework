import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../pipes/filter.pipe';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private readonly filterPipe: FilterPipe,
    private readonly coursesService: CoursesService
  ) {}
  searchValue: string = '';
  filteredData: any[] = [];
  data: [] = this.coursesService.getList();

  ngOnInit(): void {
    this.filteredData = this.coursesService.getList();
  }

  loadMoreData() {
    console.log('Load more');
  }

  search() {
    this.searchValue === ''
      ? (this.filteredData = this.coursesService.getList())
      : (this.filteredData = this.filterPipe.transform(
          this.coursesService.getList(),
          this.searchValue
        ));
  }

  delete(item: any) {
    this.coursesService.removeItem(item)
    this.filteredData = this.coursesService.getList();
  }

  trackByMethod(index: number, el: any): number {
    return el.id;
  }
}
