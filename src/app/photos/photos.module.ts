import { BsModalService } from 'ngx-bootstrap/modal';
import { CoreModule } from './../core/core.module';
import { PhotosRoutesModule } from './photos.routes';
import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos.component';
import { PhotosStoreModule } from './store/photos-store.module';
import { FlickrPhotoComponent } from './containers/flickr-photo/flickr-photo.component';
import { DoggiesComponent } from './pages/doggies/doggies.component';
import { AuthorOthersComponent } from './pages/author-others/author-others.component';
import { DoggyComponent } from './pages/doggy/doggy.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';

@NgModule({
  declarations: [
    PhotosComponent,
    FlickrPhotoComponent,
    DoggiesComponent,
    AuthorOthersComponent,
    DoggyComponent,
    PhotoListComponent
  ],
  imports: [
    SharedModule,
    PhotosStoreModule,
    PhotosRoutesModule
  ],
  providers: [
    BsModalService
  ]
})
export class PhotosModule { }
