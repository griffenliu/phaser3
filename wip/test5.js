import Loader from 'loader/Loader.js';

let loader = new Loader();

var img = loader.image('logo', 'assets/phaser1.png');

console.log(loader.list);

loader.start();

