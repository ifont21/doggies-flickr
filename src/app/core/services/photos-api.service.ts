import { PhotoOptions, SharedPhotoOptions } from './../../shared/models/photo-options';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class PhotosApiService {

  constructor(private http: HttpClient) { }

  private _rootURI = 'https://api.flickr.com/services/rest/';
  private _apiKey = '0d557380f0590fbbb7a8509102d2418c';

  getPhotoList(options?: SharedPhotoOptions): Observable<any> {
    let url = `${this._rootURI}?method=flickr.photos.search&api_key=${this._apiKey}&`;
    const photoOptions = new PhotoOptions(options);
    url += `${photoOptions.buildQuery()}`;

    return this.http.get(url);
  }

  getPhotoInfo(photoId: string): Observable<any> {
    let urlInfo =
      `${this._rootURI}?method=flickr.photos.getInfo&api_key=${this._apiKey}&nojsoncallback=1&format=json&`;
    let urlSizes =
      `${this._rootURI}?method=flickr.photos.getSizes&api_key=${this._apiKey}&nojsoncallback=1&format=json&`;
    urlInfo += `photo_id=${photoId}`;
    urlSizes += `photo_id=${photoId}`;

    return forkJoin([this.http.get(urlInfo), this.http.get(urlSizes)]);
  }
}
