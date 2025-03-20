import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed( () =>{
    const description = `${this.name()} - ${this.age()}`;
    return description;
  })

  capitalizedName = computed( () => this.name().toUpperCase());

  changeHero():void{
    this.name.set('Spiderman');
  }

  changeAge():void{
    this.age.set(25);
  }

  resetForm():void{
    this.name.set('Ironman');
    this.age.set(45);
    // document.querySelectorAll('h1')!.forEach(element => {element.innerHTML = '<h1>Desde Angular</h1>'}) ;
  }

}
