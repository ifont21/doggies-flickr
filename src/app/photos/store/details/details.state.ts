import { HttpErrorResponse } from '@angular/common/http';

export interface DetailState {
  details?: Detail;
  loading: boolean;
  error?: HttpErrorResponse;
}

export interface Detail {
  owner?: Owner;
  title?: Content;
  description?: Content;
  dates?: Date;
  location?: Location;
  sizes?: Size[];
}

export interface Owner {
  username?: string;
  realname?: string;
  nsid?: string;
}

export interface Content {
  _content?: string;
}

export interface Date {
  posted?: string;
  taken?: string;
}

export interface Size {
  width?: number;
  height?: number;
  source?: string;
}

export interface Location {
  latitude?: number;
  longitude?: number;
  accuracy?: number;
  context?: 0;
  region?: Content;
  country?: Content;
}
