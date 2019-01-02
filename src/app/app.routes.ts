import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'photos',
    loadChildren: './photos/photos.module#PhotosModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'photos'
  }
];

export const RoutesModule = RouterModule.forRoot(routes, { enableTracing: true });
