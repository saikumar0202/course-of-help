import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(
    public gallery: Gallery,
    public lightbox: Lightbox
  ) { }
  items: GalleryItem[] = [];
  data = [
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/people.png",
      src: "assets/img/people.png",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/people.png",
      src: "assets/img/people.png",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/people.png",
      src: "assets/img/people.png",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/people.png",
      src: "assets/img/people.png",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
    {
      thumb: "assets/img/backgroud-1.jpg",
      src: "assets/img/backgroud-1.jpg",
    },
  ]
  ngOnInit(): void {
    this.items = this.data.map(item => new ImageItem({ src: item.src, thumb: item.thumb }));
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom,
      thumbHeight: 90,
      thumbWidth: 120,
      thumbView: "default",
      dots: false,
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }

}
