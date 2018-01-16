import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators/takeUntil';

import { selectorSettings, actionChangeTheme } from '../settings.reducer';

@Component({
  selector: 'anms-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  theme: string;

  themes = [
	{ value: 'ASTRAL-THEME', label: 'Astral' },
    { value: 'MATRIX-THEME', label: 'Matrix' },
    { value: 'PINK-MOHAWK-THEME', label: 'Pink Mohawk' },
	{ value: 'BLACK-TRENCHCOAT-THEME', label: 'Black Trenchcoat' }

  ];

  constructor(private store: Store<any>) {
    store
      .select(selectorSettings)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(({ theme }) => (this.theme = theme));
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onThemeSelect({ value }) {
    this.store.dispatch(actionChangeTheme(value));
  }
}
