import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-length-converter',
  imports: [FormsModule],
  templateUrl: './length-converter.html',
  styleUrl: './length-converter.css',
})
export class LengthConverter {
  length: number = 1;
  result: string = '';

  // metoder
  meterToFoot(): void {
    const feet = this.length * 3.28084;
    this.result = `${parseFloat(feet.toFixed(2))} ft`;
  }

  footToMeter(): void {
    const meter = this.length / 3.28084;
    this.result = `${parseFloat(meter.toFixed(2))} m`;
  }
}
