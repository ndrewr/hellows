
import Backbone from 'backbone';
import React from 'react.backbone'; // includes react

// dummy data
var CARDS = [
  {origin:'Andrew', phrase: 'Hello World!'},
  {origin:'Snoopy', phrase: '...'},
  {origin:'Walter', phrase: 'Hoy!'},
  {origin:'Spazzie', phrase: 'Hello, hello, hello.'},
  {origin:'Japan', phrase: 'Ohayoo!'},
  {origin: 'Greg', phrase: 'Ahoy-hoy everyone!'}
];


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

// class Container extends React.Component {
var Container = React.createBackboneClass ({
    render() {
        let all_cards = this.getCollection().map(card => {
          console.dir(card);
          return <Card data={card.attributes} />;
        });
        return (
            <div className="card-board">{all_cards}</div>
        );
    }
});


// define the Card model
// two properties: phrase and origin (both strings)
var CardData = Backbone.Model.extend({
  defaults: {
    phrase: 'Hi!',
    origin: 'Friendly Stranger'
  }
});

// instantiate the collection and seed with data
var cardstack = new Backbone.Collection({model:CardData});
cardstack.set(CARDS);


React.render(<Container collection={cardstack} />, document.querySelector('.container'));
