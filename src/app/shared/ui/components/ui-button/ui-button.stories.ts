import type { Meta, StoryObj } from '@storybook/angular';
import { UiButtonComponent } from './ui-button.component';
import { ButtonType } from './button-type.enum';
import { faPlus, faChevronLeft } from '@fortawesome/sharp-solid-svg-icons';

const meta: Meta<UiButtonComponent> = {
	title: 'UI/Button',
	component: UiButtonComponent,
	tags: ['autodocs'],
	argTypes: {
		buttonType: {
			control: 'select',
			options: Object.values(ButtonType),
		},
		label: { control: 'text' },
		tall: { control: 'boolean' },
		underlineHover: { control: 'boolean' },
		icon: {
			control: 'select',
			options: ['none', 'plus', 'chevron-left'],
			mapping: {
				'none': undefined,
				'plus': faPlus,
				'chevron-left': faChevronLeft,
			},
		},
	},
};

export default meta;
type Story = StoryObj<UiButtonComponent>;

export const Primary: Story = {
	args: {
		label: 'Primary Button',
		buttonType: ButtonType.Primary,
	},
};

export const Accent: Story = {
	args: {
		label: 'Accent Button',
		buttonType: ButtonType.Accent,
	},
};

export const Dark: Story = {
	args: {
		label: 'Dark Button',
		buttonType: ButtonType.Dark,
	},
};

export const Destructive: Story = {
	args: {
		label: 'Destructive Button',
		buttonType: ButtonType.Destructive,
	},
};

export const Bare: Story = {
	args: {
		label: 'Bare Button',
		buttonType: ButtonType.Bare,
	},
};

export const BackButtonBare: Story = {
	args: {
		label: 'Back',
		buttonType: ButtonType.Bare,
		icon: faChevronLeft,
		underlineHover: true,
		tall: true,
	},
};

export const BackButtonDark: Story = {
	args: {
		label: 'Back',
		buttonType: ButtonType.Dark,
		icon: faChevronLeft,
		underlineHover: true,
		tall: true,
	},
};
