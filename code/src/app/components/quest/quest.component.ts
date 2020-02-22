import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})

export class QuestComponent implements OnInit {

  tab = [
    {
      text : 'question 1',
    a : 'a',
    b : 'b',
    c : 'c',
    d : 'd',
  },
  {
    text : 'question 2',
    a : 'a',
    b : 'b',
    c : 'c',
    d : 'd',
  },
    {
      text : 'question 3',
      a : 'a',
      b : 'b',
      c : 'c',
      d : 'd',
    },
    {
      text : 'question 4',
      a : 'a',
      b : 'b',
      c : 'c',
      d : 'd',
    },
    {
      text : 'question 5',
      a : 'a',
      b : 'b',
      c : 'c',
      d : 'd',
    },
    {
      text : 'question 6',
      a : 'a',
      b : 'b',
      c : 'c',
      d : 'd',
    },
    {
      text : 'question 7',
      a : 'a',
      b : 'b',
      c : 'c',
      d : 'd',
    },
    {
      text : 'question 8',
      a : 'a',
      b : 'b',
      c : 'c',
      d : 'd',
    },
    {
      text : 'question 9',
      a : 'a',
      b : 'b',
      c : 'c',
      d : 'd',
    },
    {
      text : 'question 10',
      a : 'a',
      b : 'b',
      c : 'c',
      d : 'd',
    }];

  count = 0;

  tot = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.loadQuest(this.count);
  }

  ansA() {
    this.count ++;
    if(this.count<10) {
      this.loadQuest(this.count);
    } else {
      if(this.tot>=150){
        document.getElementById('test').hidden = true;
        document.getElementById('badResults').hidden = false;
      } else {
        document.getElementById('test').hidden = true;
        document.getElementById('goodResults').hidden = false;
      }
    }
    return false;
  }

  ansB() {
    this.count ++;
    this.tot +=10;
    if(this.count<10) {
      this.loadQuest(this.count);
    } else {
      if(this.tot>=150){
        document.getElementById('test').hidden = true;
        document.getElementById('badResults').hidden = false;
      } else {
        document.getElementById('test').hidden = true;
        document.getElementById('goodResults').hidden = false;
      }
    }
    return false;
  }

  ansC() {
    this.count ++;
    this.tot+=20;
    if(this.count<10) {
      this.loadQuest(this.count);
    } else {
      if(this.tot>=150){
        document.getElementById('test').hidden = true;
        document.getElementById('badResults').hidden = false;
      } else {
        document.getElementById('test').hidden = true;
        document.getElementById('goodResults').hidden = false;
      }
    }
    return false;
  }

  ansD() {
    this.count ++;
    this.tot+=30;
    if(this.count<10) {
      this.loadQuest(this.count);
    } else {
      if(this.tot>=150){
        document.getElementById('test').hidden = true;
        document.getElementById('badResults').hidden = false;
      } else {
        document.getElementById('test').hidden = true;
        document.getElementById('goodResults').hidden = false;
      }
    }
    return false;
  }

  loadQuest(id) {

    document.getElementById('question').innerText = this.tab[id].text;
    document.getElementById('buttonA').innerText = this.tab[id].a;
    document.getElementById('buttonB').innerText = this.tab[id].b;
    document.getElementById('buttonC').innerText = this.tab[id].c;
    document.getElementById('buttonD').innerText = this.tab[id].d;

  }

}
