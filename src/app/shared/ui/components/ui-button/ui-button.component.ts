import {
	Component,
	ContentChild,
	ElementRef,
	Input,
	AfterContentInit,
} from '@angular/core';
import {
	FontAwesomeModule,
	IconDefinition,
} from '@fortawesome/angular-fontawesome';
import { ButtonType } from './button-type.enum';
import { NgClass } from '@angular/common';

@Component({
	selector: 'ui-button',
	standalone: true,
	imports: [FontAwesomeModule, NgClass],
	templateUrl: './ui-button.component.html',
	styleUrl: './ui-button.component.scss',
})
export class UiButtonComponent implements AfterContentInit {
	@Input() buttonType: ButtonType = ButtonType.Primary;
	@Input() tall = false;
	@Input() underlineHover = false;
	@Input() icon?: IconDefinition;
	@ContentChild('content', { read: ElementRef }) content!: ElementRef;
	ariaLabel = '';

	ngAfterContentInit() {
		this.ariaLabel = this.content?.nativeElement.innerText;
	}

	getClasses(): Record<string, boolean> {
		const classList: Record<string, boolean> = {};
		classList[this.buttonType] = true;
		if (this.tall) classList['tall'] = true;
		if (this.underlineHover) classList['underline-hover'] = true;
		return classList;
	}
}
