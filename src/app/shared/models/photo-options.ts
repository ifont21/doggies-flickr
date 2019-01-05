export class PhotoOptions {
  userId?: string;
  text?: string;
  tags?: string;
  colorCodes?: string;
  license?: string;
  hasGeo?: number;
  geoContext?: number;
  extras?: string;
  perPage?: number;
  page?: number;
  format?: string;
  contentType?: number;
  noJsonCallback?: string;
  sort?: string;

  constructor(options?: SharedPhotoOptions) {
    this.userId = options && options.userId ? options.userId : null;
    this.text = options && options.text ? options.text : null;
    this.tags = options && options.tags ? options.tags : null;
    this.colorCodes = options && options.colorCodes ? options.colorCodes : null;
    this.license = options && options.license ? options.license : null;
    this.hasGeo = options && options.hasGeo ? options.hasGeo : null;
    this.geoContext = options && options.geoContext ? options.geoContext : null;
    this.extras = options && options.extras ? options.extras : null;
    this.perPage = options && options.perPage ? options.perPage : 100;
    this.page = options && options.page ? options.page : null;
    this.format = options && options.format ? options.format : 'json';
    this.contentType = options && options.contentType ? options.contentType : 1;
    this.noJsonCallback = options && options.noJsonCallback ? options.noJsonCallback : '1';
    this.sort = options && options.sort ? options.sort : 'relevance';
  }

  buildQuery() {
    let query = '';
    Object.keys(this).forEach((option, i) => {
      if (this[option] || this[option] === '') {
        query += `${Options[option]}=${this[option]}${i + 1 === Object.keys(this).length ? '' : '&'}`;
      }
    });
    return query;
  }
}

export interface SharedPhotoOptions {
  userId?: string;
  text?: string;
  tags?: string;
  colorCodes?: string;
  license?: string;
  hasGeo?: number;
  geoContext?: number;
  extras?: string;
  perPage?: number;
  page?: number;
  format?: string;
  contentType?: number;
  noJsonCallback?: string;
  sort?: string;
}

export enum Options {
  userId = 'user_id',
  text = 'text',
  tags = 'tags',
  colorCodes = 'color_codes',
  license = 'license',
  hasGeo = 'has_geo',
  geoContext = 'geo_context',
  extras = 'extras',
  perPage = 'per_page',
  page = 'page',
  format = 'format',
  contentType = 'content-type',
  noJsonCallback = 'nojsoncallback',
  sort = 'sort'
}
