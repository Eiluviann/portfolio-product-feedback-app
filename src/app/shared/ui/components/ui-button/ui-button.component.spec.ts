import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiButtonComponent } from './ui-button.component';
import { ButtonType } from './button-type.enum';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck } from '@fortawesome/sharp-solid-svg-icons';

describe('UiButtonComponent', () => {
	let component: UiButtonComponent;
	let fixture: ComponentFixture<UiButtonComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [UiButtonComponent, FontAwesomeModule],
		}).compileComponents();

		fixture = TestBed.createComponent(UiButtonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should have default values', () => {
		expect(component.buttonType).toBe(ButtonType.Primary);
		expect(component.tall).toBeFalsy();
		expect(component.underlineHover).toBeFalsy();
		expect(component.icon).toBeUndefined();
	});

	it('should apply correct button type class', () => {
		const buttonTypes = Object.values(ButtonType);
		buttonTypes.forEach((type) => {
			component.buttonType = type;
			fixture.detectChanges();
			const buttonElement = fixture.nativeElement.querySelector('button');
			expect(buttonElement.classList.contains(type)).toBeTruthy();
		});
	});

	it('should apply tall class when tall is true', () => {
		component.tall = true;
		fixture.detectChanges();
		const buttonElement = fixture.nativeElement.querySelector('button');
		expect(buttonElement.classList.contains('tall')).toBeTruthy();
	});

	it('should apply underline-hover class when underlineHover is true', () => {
		component.underlineHover = true;
		fixture.detectChanges();
		const buttonElement = fixture.nativeElement.querySelector('button');
		expect(
			buttonElement.classList.contains('underline-hover'),
		).toBeTruthy();
	});

	it('should render icon when provided', () => {
		component.icon = faCheck;
		fixture.detectChanges();
		const iconElement = fixture.nativeElement.querySelector('fa-icon');
		expect(iconElement).toBeTruthy();
	});

	it('should not render icon when not provided', () => {
		component.icon = undefined;
		fixture.detectChanges();
		const iconElement = fixture.nativeElement.querySelector('fa-icon');
		expect(iconElement).toBeFalsy();
	});

	it('should be focusable', () => {
		const buttonElement = fixture.nativeElement.querySelector('button');
		expect(buttonElement.tabIndex).toBe(0);
	});

	it('should have icon with aria-hidden attribute', () => {
		component.icon = faCheck;
		fixture.detectChanges();
		const iconElement = fixture.nativeElement.querySelector('fa-icon');
		expect(iconElement.getAttribute('aria-hidden')).toBe('true');
	});
});
