import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimoni',
  templateUrl: './testimoni.page.html',
  styleUrls: ['./testimoni.page.scss'],
})
export class TestimoniPage implements OnInit {
  public testi = [
    {
      name: 'Jafar',
      date: '2 Desember 2019',
      title: 'Mengonsumsi dengan rutin',
      img: '../../assets/background/product.jpg',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae corrupti nihil ut natus non harum quis?',
    },
    {
      name: 'Jafar',
      date: '2 Desember 2019',
      title: 'Mengonsumsi dengan rutin',
      img: '../../assets/background/product.jpg',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae corrupti nihil ut natus non harum quis?',
    },
    {
      name: 'Jafar',
      date: '2 Desember 2019',
      title: 'Mengonsumsi dengan rutin',
      img: '../../assets/background/product.jpg',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae corrupti nihil ut natus non harum quis?',
    },
    {
      name: 'Jafar',
      date: '2 Desember 2019',
      title: 'Mengonsumsi dengan rutin',
      img: '../../assets/background/product.jpg',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae corrupti nihil ut natus non harum quis?',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
