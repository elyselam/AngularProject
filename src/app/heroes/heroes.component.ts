import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  //better to call getHeroes() inside ngOnInit than constructor
  // bc constructor shouldn't DO anything, only simple initialization ex. wiring params to properties
  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService) {
  }
//subscribe() passes emitted array back to the callback, which sets the heroes property
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes) => {
        console.log(heroes);
        this.heroes = heroes;
      });

  }

}
