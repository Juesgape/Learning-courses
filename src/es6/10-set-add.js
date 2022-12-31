const list = new Set()

list.add('item1');
list.add('item2').add('item3');

console.log(list);

//example
const bestPlayers = ['Messi', 'Messi', 'Ronaldo', 'Messi', 'Ronaldo', 'Ronaldo']

const setBestPlayers = [... new Set(bestPlayers)]
console.log(setBestPlayers);
