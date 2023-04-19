import { Component, Output, EventEmitter } from "@angular/core";


@Component({
    selector:'app-botao',
    templateUrl: "./botao.component.html"
}) 
export class BotaoComponent{

    @Output()

    clickBotao= new EventEmitter()
    @Output()

    botaoMouseOver= new EventEmitter()

    botaoClick():void {
        console.log("cliquei");
        this.clickBotao.emit();

    }
    mouseOver():void{
        console.log("BOTAO MOUSE OVER")
        this.botaoMouseOver("botao component mouseover")
    }

}