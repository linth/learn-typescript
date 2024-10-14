/**
 * event example.
 * 
 * Reference:
 *  - https://www.youtube.com/watch?v=Pl7pDjWd830
 */
import EventEmitter from "events";

type User = {
  id: string,
  name: string,
}

const userAuthEmitter = new EventEmitter();

userAuthEmitter.on('login', (user: User) => {
  // login
});

