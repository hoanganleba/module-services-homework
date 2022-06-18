import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { IonicModule } from '@ionic/angular';
import { NewCourseComponent } from './new-course/new-course.component';
import { LoadMoreButtonComponent } from './load-more-button/load-more-button.component';
import { DurationPipe } from './pipes/duration.pipe';
import { NoDataComponent } from './no-data/no-data.component';
import { CreationDateDirective } from './directives/creation-date.directive';
import { CreationDatePipe } from './pipes/creation-date.pipe';
import { OrderByCreationDatePipe } from './pipes/order-by-creation-date.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-course', component: NewCourseComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BreadcrumbComponent,
    CourseCardComponent,
    NewCourseComponent,
    LoadMoreButtonComponent,
    DurationPipe,
    NoDataComponent,
    CreationDateDirective,
    CreationDatePipe,
    OrderByCreationDatePipe,
    FilterPipe,
    IfAuthenticatedDirective,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), IonicModule.forRoot()],
  providers: [FilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
