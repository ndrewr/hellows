
import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="welcome-card">
                <p>
                  <span className="welcome-phrase">{this.props.data.phrase}</span>
                </p>
                from <span className="welcome-origin">{this.props.data.origin}</span>
            </div>
        );
    }
}

class Container extends React.Component {
    render() {

        let all_cards = [];
        this.props.cards.forEach(card => {
          all_cards.push( <Card data={card} /> );
        })
        return (
            <div className="card-board">{all_cards}</div>
        );
    }
}


var CARDS = [
  {origin:'Andrew', phrase: 'Hello World!'},
  {origin:'Snoopy', phrase: '...'},
  {origin:'Walter', phrase: 'Hoy!'},
  {origin:'Spazzie', phrase: 'Hello, hello, hello.'},
  {origin:'Japan', phrase: 'Ohayoo!'},
  {origin: 'Greg', phrase: 'Ahoy-hoy everyone!'}
];

var first_card = {origin:'Andrew', phrase: 'Hello!'};

React.render(<Container cards={CARDS} />, document.querySelector('.container'));
