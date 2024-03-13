import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-fetch-photos',
  templateUrl: './fetch-photos.component.html',
  styleUrl: './fetch-photos.component.css',
})
export class FetchPhotosComponent implements OnInit {
  photo: string = '';
  constructor(private photoService: PhotosService) {
    this.fetchPhoto();
  }

  ngOnInit(): void {}

  onClick() {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoService.getPhoto().subscribe((res) => {
      this.photo = res;
    });
  }
}
