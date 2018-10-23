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
    new Quote(1, 'I just knew there were stories I wanted to tell.', 'Octavia E. Butler', 0, 0, new Date(2018,23,10)),
    new Quote(2, 'All good books are alike in that they are truer than if they really happened and after you are finished reading one you feel that it all happened to you and after which it all belongs to you.', '- Ernest Hemingway', 0, 0, new Date(2018,23,10)),
    new Quote(3, 'When written in Chinese, the word crisis is composed of two characters. One represents danger and the other represents opportunity.', '- John F. Kennedy', 0, 0, new Date(2018,23,10)),
    new Quote(4, 'The play was a great success, but the audience was a disaster.', 'Oscar Wilde', 0, 0, new Date(2018,23,10)),
    new Quote(5, 'Noise proves nothing. Often a hen who has merely laid an egg cackles as if she had laid an asteroid.', ' Mark Twain', 0, 0, new Date(2018,7,10))
  ]
  toogleDetails(index){
    this.userQuotes[index].showDetail = !this.userQuotes[index].showDetail
  }
  quoteDelete(isDeleted,index){
    if (isDeleted){
        this.userQuotes.splice(index,1);
		}
  }
  
  addNewQuote(quote){
    let quotesLength = this.userQuotes.length;
    quote.quoteID=quotesLength+1;
    quote.dateAdded = new Date(quote.completeDate)
    this.userQuotes.push(quote)
   }

  constructor() {}

  ngOnInit() {
  }

}
