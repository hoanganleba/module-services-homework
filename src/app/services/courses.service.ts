import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  data: any = [
    {
      id: 1,
      title: 'video course 1. name tag',
      duration: 40,
      creationDate: '01/28/2020',
      topRated: true,
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    },
    {
      id: 2,
      title: 'video course 1. name tag',
      duration: 88,
      creationDate: '06/02/2022',
      topRated: false,
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    },
    {
      id: 3,
      title: 'image course 1. name tag',
      duration: 88,
      creationDate: '06/28/2020',
      topRated: false,
      description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    },
  ];
  constructor() {}

  getList() {
    return this.data;
  }

  createCourse() {}

  getItemById() {}

  updateItem() {}

  removeItem(id: any) {
    if (window.confirm('Do you really want to delete this course?')) {
      const value = this.data.find((item: any) => item.id === id);
      this.data = this.data.filter((item: any) => {
        return item !== value;
      });
    }
  }
}
