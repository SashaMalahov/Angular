import { Component, OnInit } from '@angular/core';
import { CoffeeElectionStore } from '../store/coffee-election.store';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.css']
})
export class AddCandidateComponent implements OnInit {
  name: string;

  constructor(private store: CoffeeElectionStore ) { }

  ngOnInit() {
  }

  addCandidate(name: string) {
    console.log(`Candidate with name ${name} was added`);
    this.store.addCandidate(name);
  }

}
