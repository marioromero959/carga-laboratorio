import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDecimal]'
})
export class DecimalDirective {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef
  ) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value:any) {
    this.el.value = this.formatNumber(value);
  }

  // private formatNumber(value:any) {
  //   return value.replace(/\D/g, '')
  //              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  //             //  .replace(/\,/g, '.');
  // }

  private formatNumber(value:any) {
      value = value.replace(/\./g, '');
      const parts = value.split(',');
      let integerPart = parts[0];
      let decimalPart = parts.length > 1 ? ',' + parts[1] : '';
  
      const integerPartWithSeparators = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
      return integerPartWithSeparators + decimalPart;
    }
}