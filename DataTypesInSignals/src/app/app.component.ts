import { Component, Signal, signal, WritableSignal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataTypesInSignals';

  data: WritableSignal<number | string> = signal(10);
  count: Signal<number> = computed(() => 200)


  updateSignal() {
    this.data.set('hello')


  }
}
