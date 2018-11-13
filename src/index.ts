import {map} from "rxjs/operators";
import * as Rx from "rxjs";

const input = document.getElementById("in") as HTMLDivElement;
Rx.fromEvent(input, "click").pipe(map(event => `Event Time ${event.timeStamp}`)).subscribe(value => console.log(value));
