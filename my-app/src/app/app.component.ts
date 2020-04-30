import {Component, OnInit} from '@angular/core';
import {fromEvent, Observable} from 'rxjs';
import {map, mergeMapTo, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';
  pointerPosition$: Observable<{x,y}>;

  ngOnInit(): void {
    this.pointerPosition$ = fromEvent<MouseEvent>(document, 'mousedown').pipe(
      mergeMapTo(fromEvent<MouseEvent>(document, 'mousemove')
        .pipe(takeUntil(fromEvent<MouseEvent>(document, 'mouseup')))),
        map(mouseEvent => ({x: mouseEvent.clientX, y: mouseEvent.clientY})));
  }
}
