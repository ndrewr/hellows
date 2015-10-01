
import React from 'react';

var Card = React.createClass({
    render: function() {
        return (
            <div class="welcome-card">
                <p>
                  <span class="welcome-phrase">{this.props.data.phrase}</span>
                </p>
                <span class="welcome-origin">{this.props.data.origin}</span>
            </div>
        );
    }
});

var Container = React.createClass({
    render: function() {
        return (
            <div class="container">
                <Card data={this.props.card} />
            </div>
        );
    }
});


var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

var first_card = {origin:'Andrew', phrase: 'Hello!'};

React.render(<Container card={first_card} />, document.querySelector('.container'));
