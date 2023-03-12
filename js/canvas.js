// let canvas = document.querySelector('#canvas'),
//     ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

class Canvas {
    constructor() {
        this.view = document.createElement('canvas');
        this.ctx = this.view.getContext('2d');

        this.container = [];
    }
    add(...items) {}
}