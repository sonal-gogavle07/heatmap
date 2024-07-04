import { Component, Input, OnInit  } from '@angular/core';
import { EventserviceService } from '../eventservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-heatmap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heatmap.component.html',
  styleUrl: './heatmap.component.css'
})
export class HeatmapComponent  implements OnInit {
  @Input() eventData: { timestamp: Date, intensity: number }[] = [];
  heatmapData: any = {};
  maxIntensity: number = 0;



  constructor(private eventService: EventserviceService) {}


  ngOnInit() {
    this.processData();
    this.eventService.eventObservable$.subscribe(event => {
      this.eventData.push(event);
      this.processData();
    });
  }

  processData() {
    this.eventData.forEach(event => {
      const date = new Date(event.timestamp);
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      const key = `${year}-${month}-${day}`;
      if (!this.heatmapData[key]) {
        this.heatmapData[key] = 0;
      }
      this.heatmapData[key] += event.intensity;
      if (this.heatmapData[key] > this.maxIntensity) {
        this.maxIntensity = this.heatmapData[key];
      }
    });
  }

  getWeeksInYear() {
    const weeks = [];
    for (let i = 0; i < 52; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        week.push(new Date(2024, 0, 1 + i * 7 + j));
      }
      weeks.push(week);
    }
    return weeks;
  }
  
  getCellColor(date: Date) {
    const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const intensity = this.heatmapData[key] || 0;
    const colorScale = Math.min(intensity / this.maxIntensity * 255, 255);
    return `rgb(0, ${colorScale}, 0)`;
  }
  
  getCellTitle(date: Date) {
    const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    const intensity = this.heatmapData[key] || 0;
    return `Date: ${date.toDateString()}, Intensity: ${intensity}`;
  }
  
}
