import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature-converter',
  imports: [FormsModule],
  templateUrl: './temperature-converter.html',
  styleUrl: './temperature-converter.css',
})
export class TemperatureConverter {
  temp: number = 0;
  result: string = '';

  // metoder

  celsiusToFahrenheit(): void {
    const fahrenheit = (this.temp * 9 / 5) + 32;
    this.result = `${parseFloat(fahrenheit.toFixed(2))} °F`;
  }

  fahrenheitToCelsius(): void {
    const celsius = (this.temp - 32) * 5 / 9;
    this.result = `${parseFloat(celsius.toFixed(2))} °C`;
  }
}
