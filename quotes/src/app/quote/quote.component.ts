import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
import { from } from 'rxjs';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  userQuotes = [
    new Quote(1, 'Quote number 1', 'oriso', 0, 0, new Date(2018,7,10)),
    new Quote(2, 'Quote number 2', 'oriso', 0, 0, new Date(2018,7,10)),
    new Quote(3, 'Quote number 3', 'oriso', 0, 0, new Date(2018,7,10)),
    new Quote(4, 'Quote number 4', 'oriso', 0, 0, new Date(2018,7,10)),
    new Quote(5, 'Quote number 5', 'oriso', 0, 0, new Date(2018,7,10))
  ]
  toogleDetails(index){
    this.userQuotes[index].showDetail = !this.userQuotes[index].showDetail
  }
  quoteDelete(isDeleted,index){
    if (isDeleted){
        this.userQuotes.splice(index,1);
		}
	}
  constructor() {}

  ngOnInit() {
  }

}
