import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css',
})
export class Converter {
  temp: number = 0;
  result1: string = '';
  length: number = 1;
  result2: string = '';

  // metoder
  meterToFoot(): void {
    const feet = this.length * 3.28084;
    this.result1 = `${feet} ft`;
  }

  footToMeter(): void {
    const meter = this.length / 3.28084;
    this.result1 = `${meter} m`;
  }

  celsiusToFahrenheit(): void {
    const fahrenheit = (this.temp * 9 / 5) + 32;
    this.result2 = `${fahrenheit} °F`;
  }

  fahrenheitToCelsius(): void {
    const celsius = (this.temp - 32) * 5 / 9;
    this.result2 = `${celsius} °C`;
  }
}