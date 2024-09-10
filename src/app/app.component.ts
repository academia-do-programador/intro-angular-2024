import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

// TypeScript = JavaScript com Tipos

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Bem-vindo(a) ao {{ titulo }}</h1>

    <p>Digite um número entre 1 e 10</p>

    <input
      [(ngModel)]="numeroDigitado"
      [name]="numeroDigitado.toString()"
      type="number"
      min="1"
      max="10"
    />

    <button (click)="adivinharNumero()">Adivinhar</button>

    <p>{{ mensagem }}</p>
  `,
  styles: [],
})
export class AppComponent {
  public titulo: string = "Jogo de Adivinhação";
  public mensagem: string = "";

  public numeroSecreto: number;
  public numeroDigitado: number;

  constructor() {
    this.numeroSecreto = Math.floor(Math.random() * 10) + 1;
    this.numeroDigitado = 1;
  }

  public adivinharNumero(): void {
    if (this.numeroDigitado == this.numeroSecreto) {
      this.mensagem = "Você acertou o número secreto!";
    } else if (this.numeroDigitado > this.numeroSecreto) {
      this.mensagem = "O número digitado foi maior que o número secreto!";
    } else {
      this.mensagem = "O número digitado foi menor que o número secreto!";
    }
  }
}
