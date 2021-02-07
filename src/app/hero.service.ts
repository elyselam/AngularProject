import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    //notifies when heroes are fetched
    this.messageService.add('HeroService: fetched heroes');
    //of() returns Observable<Hero[]> that emits a single value, the array
    return of(HEROES);
  }
}
