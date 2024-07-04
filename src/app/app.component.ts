import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeatmapComponent } from './heatmap/heatmap.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeatmapComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'heatmap';

  events = [
    { timestamp: new Date('2024-01-01T00:00:00Z'), intensity: 20 },
    { timestamp: new Date('2024-06-30T00:00:00Z'), intensity: 15 },
    { timestamp: new Date('2024-06-27T00:00:00Z'), intensity: 10 },
    { timestamp: new Date('2024-01-05T00:00:00Z'), intensity: 5 },
    { timestamp: new Date('2024-02-10T00:00:00Z'), intensity: 10 },
    { timestamp: new Date('2024-02-05T00:00:00Z'), intensity: 15 },
    { timestamp: new Date('2024-02-15T00:00:00Z'), intensity: 15 },
    { timestamp: new Date('2024-02-17T00:00:00Z'), intensity: 20 },
    { timestamp: new Date('2024-02-20T00:00:00Z'), intensity: 1 },
    { timestamp: new Date('2024-03-15T00:00:00Z'), intensity: 15 },
    { timestamp: new Date('2024-04-20T00:00:00Z'), intensity: 20 },
    { timestamp: new Date('2024-05-04T00:00:00Z'), intensity: 15 },
    { timestamp: new Date('2024-05-11T00:00:00Z'), intensity: 15 },
    { timestamp: new Date('2024-05-18T00:00:00Z'), intensity: 10 },
    { timestamp: new Date('2024-05-25T00:00:00Z'), intensity: 15 },
    { timestamp: new Date('2024-05-27T00:00:00Z'), intensity: 1 },
    { timestamp: new Date('2024-05-30T00:00:00Z'), intensity: 20 },
    { timestamp: new Date('2024-06-30T00:00:00Z'), intensity: 1 },
    { timestamp: new Date('2024-07-01T00:00:00Z'), intensity: 15 },
    { timestamp: new Date('2024-07-15T00:00:00Z'), intensity: 10 },
    { timestamp: new Date('2024-07-23T00:00:00Z'), intensity: 15 },
    { timestamp: new Date('2024-08-04T00:00:00Z'), intensity: 1 },
    { timestamp: new Date('2024-09-09T00:00:00Z'), intensity: 20 },
    { timestamp: new Date('2024-10-14T00:00:00Z'), intensity: 10 },
    { timestamp: new Date('2024-11-19T00:00:00Z'), intensity: 10 },
    { timestamp: new Date('2024-12-24T00:00:00Z'), intensity: 1 },
    { timestamp: new Date('2024-01-10T00:00:00Z'), intensity: 5 },
    { timestamp: new Date('2024-02-14T00:00:00Z'), intensity: 1 },
    { timestamp: new Date('2024-03-05T00:00:00Z'), intensity: 1 },
    { timestamp: new Date('2024-04-27T00:00:00Z'), intensity: 20 },
    { timestamp: new Date('2024-05-21T00:00:00Z'), intensity: 15 },
    { timestamp: new Date('2024-06-05T00:00:00Z'), intensity: 10 },
    { timestamp: new Date('2024-06-11T00:00:00Z'), intensity: 20 },
    { timestamp: new Date('2024-06-22T00:00:00Z'), intensity: 1 },
    { timestamp: new Date('2024-12-02T00:00:00Z'), intensity: 10 },
    { timestamp: new Date('2024-12-09T00:00:00Z'), intensity: 15 },
    { timestamp: new Date('2024-12-16T00:00:00Z'), intensity: 20 },
    { timestamp: new Date('2024-12-25T00:00:00Z'), intensity: 20 },
  ];
}
