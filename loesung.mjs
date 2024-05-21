import EventEmitter from 'events';

const myEmitter = new EventEmitter();

// Einen neuen Event Lister für 'uebung' definieren
myEmitter.once('uebung', (details) => {
    console.log(`Das Event wurde ausgelöst: ${details}`);
});

// Auslösen des Events 'uebung'
myEmitter.emit('uebung', 'M133');
myEmitter.emit('uebung', 'M133');
myEmitter.emit('uebung', 'M133');
