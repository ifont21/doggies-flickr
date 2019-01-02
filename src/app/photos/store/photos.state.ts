import { HttpErrorResponse } from '@angular/common/http';

export interface PhotoState {
  photosSummary: PhotosSummaryState;
}

export interface PhotosSummaryState {
  flickr: FlickrPhotos;
  loading: boolean;
  error: HttpErrorResponse;
}

export interface FlickrPhotos {
  total?: string;
  pagination?: Page;
  photos?: Photo[];
}

export interface Page {
  page: number;
  pages: number;
  perPage: number;
}

export interface Owner {
  id?: string;
  name?: string;
}

export interface Image {
  url: string;
  height: string;
  width: string;
}

export interface Photo {
  id: number;
  owner?: Owner;
  title?: string;
  farm?: number;
  isPublic: boolean;
  image: Image;
}

export const initialState: PhotoState = {
  photosSummary: {
    flickr: {
      total: '0',
      photos: []
    },
    loading: false,
    error: null
  }
};
