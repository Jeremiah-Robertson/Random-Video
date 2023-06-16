import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-video-generator',
  templateUrl: './video-generator.component.html',
  styleUrls: ['./video-generator.component.scss']
})
export class VideoGeneratorComponent implements OnInit {

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }
  jsonData =
    {
      "videos": [
        {
          "title": "Hogwarts Legacy Part 1 Walkthrough | Welcome To Hogwarts Year 5 Student!",
          "id": 0,
          "embed_url": "https://www.youtube.com/embed/6NlM_dmnYSw"
        },
        {
          "title": "My first ever Nuke | Let's GO!!!!!",
          "id": 1,
          "embed_url": "https://www.youtube.com/embed/k5eFil3cZJo"
        },
        {
          "title": "My Aim Is On Spot |Apex Legends| Twitch Stream Highlighted Game ^_^",
          "id": 2,
          "embed_url": "https://www.youtube.com/embed/cNnWQTc5eIc"
        }
      ]
    };

  loadsRandomVideo = (): void => {
    const ranNum = Math.floor(Math.random() * this.jsonData.videos.length);
    const video = this.jsonData.videos[ranNum];
    console.log(ranNum);
    if (video.embed_url && video.title) {
      const iframe = document.createElement("iframe");
      iframe.src = video.embed_url + '?autoplay=1&allowfullscreen&mute=1';
      document.body.appendChild(iframe);
      iframe.style.width = "100vw";
      iframe.style.height = "550px";
      iframe.style.border = "none";
      const titleElement = document.getElementById('title');
      if (titleElement) {
        titleElement.innerHTML = video.title;
      }
    }
  }

  reloadPage(): void {
    location.reload();
  }
  ngAfterViewInit() {
    window.addEventListener('load', () => {
      this.loadsRandomVideo();
    });
  }

}
