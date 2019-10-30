import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoffeeElectionComponentComponent } from './coffee-election-component/coffee-election-component.component';
import { CoffeeElectionStore } from './store/coffee-election.store';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeElectionComponentComponent,
    AddCandidateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoffeeElectionStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
