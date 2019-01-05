import { DetailState } from './details/details.state';
import { HttpErrorResponse } from '@angular/common/http';

export interface PhotoState {
  photosSummary: PhotosSummaryState;
  detail: DetailState;
}

export interface PhotosSummaryState {
  flickr: FlickrPhotos;
  loading: boolean;
  loadingScroll: boolean;
  error: HttpErrorResponse;
}

export interface FlickrPhotos {
  total?: string;
  page: number;
  pages: number;
  perPage: number;
  photo?: Photo[];
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
      photo: [],
      page: 0,
      pages: 0,
      perPage: 0
    },
    loading: false,
    loadingScroll: false,
    error: null
  },
  detail: {
    details: null,
    loading: false
  }
};
