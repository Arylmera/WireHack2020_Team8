import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})

export class QuestComponent implements OnInit {

  tab = [
    {
      text : 'You have discovered that your partner is cheating on you. What is your reaction?',
    a : 'Nothing',
    b : 'I stay calm until we have a discussion',
    c : 'I\'m upset but we\'ll talk later',
    d : 'I go mad and don\'t want to talk',
  },
  {
    text : 'You are trying to open a glass jar but but you don\'t succeed. What is your reaction?',
    a : 'I give up',
    b : 'I keep my calm and I keep trying',
    c : 'I\'m upset but I keep trying',
    d : 'I am mad and throw it',
  },
    {
      text : 'You are talking to someone who is making fun of you. What do you do?',
      a : 'I don\'t care and just leave',
      b : 'I keep my calm and I try to discuss the situation',
      c : 'I\'m upset but I keep talking to them',
      d : 'I\'m getting mad and start fighting with them.',
    },
    {
      text : 'You are having a debate and know you are right but the other person keeps telling that you\'re wrong. What do you do?',
      a : 'I give up ',
      b : 'I try to stay calm and express what I\'m feeling',
      c : 'I am getting upset and keep arguing',
      d : 'I am getting angry and start yelling',
    },
    {
      text : 'Do you or would you like to practice a contact sport?',
      a : 'nope',
      b : 'why not',
      c : 'sounds interesting',
      d : 'absolutely',
    },
    {
      text : 'Do you like sharing your stuff ?',
      a : 'what\'s mine is yours',
      b : 'I don\'t mind',
      c : 'I don\'t like it',
      d : 'Don\'t touch them',
    },
    {
      text : 'You\'re more like ?',
      a : 'A good salad',
      b : 'Sushi',
      c : 'Steak and fries',
      d : 'I eat everything',
    },
    {
      text : 'Do you feel concerned for the environment?',
      a : 'I\'m worried about our future',
      b : 'I think we should do something',
      c : 'i think it\'s no big deal',
      d : 'I don\'t care',
    },
    {
      text : 'Do you have a pet?',
      a : 'yes! Love them',
      b : 'yes',
      c : 'no',
      d : 'no! Don\'t like them',
    },
    {
      text : 'When was the last time you cried?',
      a : 'Yesterday',
      b : 'Last week',
      c : '4 month ago',
      d : 'Never',
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
