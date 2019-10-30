import { Component, OnInit } from '@angular/core';
import { CoffeeElectionStore } from '../store/coffee-election.store';

@Component({
  selector: 'app-coffee-election-component',
  templateUrl: './coffee-election-component.component.html',
  styleUrls: ['./coffee-election-component.component.css']
})
export class CoffeeElectionComponentComponent implements OnInit {

  constructor(private store: CoffeeElectionStore) { }

  ngOnInit() {
    this.store.state$.subscribe(state => {
      console.log('store has changed');
      console.log(...state.candidates);
    });
  }

}
