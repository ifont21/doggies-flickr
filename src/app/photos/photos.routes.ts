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
        redirectTo: 'doggies',
        pathMatch: 'full'
      },
      {
        path: 'doggies',
        children: [
          {
            path: '',
            component: DoggiesComponent
          },
          {
            path: ':id',
            component: DoggyComponent
          }
        ]
      },
      {
        path: 'author-others/:id',
        component: AuthorOthersComponent
      }
    ]
  }
];

export const PhotosRoutesModule = RouterModule.forChild(routes);
