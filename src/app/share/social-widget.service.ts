import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SocialWidgetService {
  SOCIAL_DATA = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/',
      icon: 'fa-facebook-f',
      color: '#3b5998',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/',
      icon: 'fa-twitter',
      color: '#55acee',
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/',
      icon: 'fa-linkedin',
      color: '#0082ca',
    },
    {
      name: 'Google',
      link: 'https://plus.google.com/',
      icon: 'fa-google',
      color: '#dd4b39',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/',
      icon: 'fa-instagram',
      color: '#ac2bac',
    },
  ];
  constructor() {}
}
