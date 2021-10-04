import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';

@Component({
  selector: 'mystory-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  private _variant = '';

  get variant(): string {
    return this._variant;
  }

  @Input()
  set variant(variant: string) {
    this._variant = variant;
    this.class = this.variant;
  }

  @HostBinding('class') class = '';

  @Input()
  text = 'action';

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  clickButton = new EventEmitter<string>();

  ngOnInit(): void {
    this.class = this.variant;
  }

  onClick(): void {
    this.clickButton.emit('test');
  }
}

@NgModule({
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  imports: [CommonModule],
})
export class MyStoryButtonModule {}
