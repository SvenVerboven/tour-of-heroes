import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {map, mergeMapTo, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Tour of Heroes';

  ngOnInit(): void {
    const mouseDrag$ = fromEvent<MouseEvent>(document, 'mousedown').pipe(
      mergeMapTo(
        fromEvent<MouseEvent>(document, 'mousemove')
          .pipe(takeUntil(fromEvent<MouseEvent>(document, 'mouseup'))
          )
      )
    ).pipe(
      map(mouseEvent => `Position = ${mouseEvent.clientX} on the X axis and ${mouseEvent.clientY} on the Y axis`))
      .subscribe(result => console.log(result));

  }
}
