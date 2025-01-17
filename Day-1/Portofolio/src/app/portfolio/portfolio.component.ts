import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
 // Portfolio items
//  cards = [
//   {
//     title: 'Project One',
//     description: 'This is a description of the first project.',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     title: 'Project Two',
//     description: 'This is a description of the second project.',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     title: 'Project Three',
//     description: 'This is a description of the third project.',
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     title: 'Project Four',
//     description: 'This is a description of the fourth project.',
//     image: 'https://via.placeholder.com/150',
//   },
// ];

cards :string[]=[
  'WEB DESIGN',
  'MOBILE DESIGN',
  'LOGO DESIGN',
  'WEB APPLICATION DEVELOPMENT',
  'MOBILE APPLICTION DEV',
  'PWA DEVELOPMENT'
]


}
