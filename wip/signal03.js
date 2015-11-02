import SignalGroup from 'system/SignalGroup.js';

let events = new SignalGroup();

let onComplete = events.create();
let onLoad = events.create();
let onError = events.create();

events.listen(handler);

onComplete.dispatch('onComplete');
onLoad.dispatch('onLoad');
onError.dispatch('onError');

function handler (a) {
    console.log('hello from', a);
}
