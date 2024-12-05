import { Component } from "@angular/core";
@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
})
export class CounterComponent {
  private valor: number = 10;
  public counter: number = this.valor;
  public mensaje: string = '';

  decreaseBy(): void {
    if (this.counter == 0) {
      this.mensaje = 'No puedes seguir decrementando'
    } else {
      this.counter -= 1;
    }
  }

  increaseBy(): void {
    if (this.counter == 20) {
      this.mensaje = 'No puedes seguir incrementando'
    } else {
      this.counter += 1;
    }
  }

  resetBy(): void {
    this.counter = this.valor;
    this.mensaje = '';
  }
}
