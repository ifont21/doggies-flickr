import { PhotosComponent } from './photos.component';
import { DoggyComponent } from './pages/doggy/doggy.component';
import { AuthorOthersComponent } from './pages/author-others/author-others.component';
import { DoggiesComponent } from './pages/doggies/doggies.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'doggies'
      },
      {
        path: 'doggies',
        component: DoggiesComponent,
        children: [
          {
            path: ':id',
            component: DoggyComponent
          }
        ]
      },
      {
        path: 'authors/:id',
        component: AuthorOthersComponent
      }
    ]
  }
];

export const PhotosRoutesModule = RouterModule.forChild(routes);
