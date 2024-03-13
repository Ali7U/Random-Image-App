import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID iJxCR9DxA1vzmzt7GgZBM0qFZk-YZOUII-IroL8UrBg',
        },
      })
      .pipe(map((m) => m.urls.regular));
  }
}
