/*
project: hellows
file: seed
author: Andrew Roy Chen
last modified: Oct 06 2015
*/

// need to import some instance of Collection, eg. cardstack

// dummy data
var CARDS = [
  {origin:'Andrew', phrase: 'Hello World!'},
  {origin:'Snoopy', phrase: '...'},
  {origin:'Walter', phrase: 'Hoy!'},
  {origin:'Spazzie', phrase: 'Hello, hello, hello.'},
  {origin:'Japan', phrase: 'Ohayoo!'},
  {origin: 'Greg', phrase: 'Ahoy-hoy everyone!'}
];

cardstack.add(CARDS); // adds seed data on first deploy
