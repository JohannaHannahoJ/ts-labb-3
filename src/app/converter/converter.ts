import { Component } from '@angular/core';
import { LengthConverter } from '../length-converter/length-converter';
import { TemperatureConverter } from '../temperature-converter/temperature-converter';

@Component({
  selector: 'app-converter',
  imports: [LengthConverter, TemperatureConverter],
  templateUrl: './converter.html',
  styleUrl: './converter.css',
})
export class Converter {
}