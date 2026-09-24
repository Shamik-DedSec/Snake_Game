import { Snake } from './snake.js';

export class Game {

    constructor() {

        this.rows = 20;
        this.columns = 20;
        this.snake = new Snake();
    }

}