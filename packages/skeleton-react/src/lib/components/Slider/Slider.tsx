import { FC, useId } from 'react';

import * as slider from '@zag-js/slider';
import { useMachine, normalizeProps } from '@zag-js/react';
import type { SliderProps } from './types';
import { noop } from '../../internal/noop.js';

export const Slider: FC<SliderProps> = ({
	height = 'h-1.5',
	// Root ---
	base = '',
	classes = '',
	// Control ---
	controlBase = '',
	controlClasses = '',
	// Track ---
	trackBase = 'overflow-hidden',
	trackBg = 'bg-surface-200-800',
	trackRounded = 'rounded-full',
	trackClasses = '',
	// Meter ---
	meterBase = '',
	meterBg = 'bg-surface-950-50',
	materRounded = 'rounded-container',
	meterClasses = '',
	// Thumb ---
	thumbBase = 'ring-inset transition-scale duration-100 ease-in-out',
	thumbSize = 'size-5',
	thumbBg = 'bg-surface-50-950',
	thumbRingSize = 'ring-2',
	thumbRingColor = 'ring-surface-950-50',
	thumbRounded = 'rounded-full',
	thumbScale = 'hover:scale-125',
	thumbCursor = 'hover:cursor-pointer',
	thumbClasses = '',
	// State
	stateDisabled = 'disabled',
	stateReadOnly = 'cursor-not-allowed',
	// Events
	onValueChange = noop,
	onValueChangeEnd = noop,
	// Zag
	...zagProps
}) => {
	// Zag
	const [state, send] = useMachine(
		slider.machine({
			id: useId(),
			onValueChange: (details) => onValueChange(details.value),
			onValueChangeEnd: (details) => onValueChangeEnd(details.value)
		}),
		{ context: zagProps }
	);
	const api = slider.connect(state, send, normalizeProps);

	// Reactive
	const rxDisabled = state.context.disabled ? stateDisabled : '';
	const rxReadOnly = state.context.readOnly ? stateReadOnly : `${thumbScale} ${thumbCursor}`;

	return (
		<div {...api.getRootProps()} className={`${base} ${height} ${rxDisabled} ${classes}`} data-testid="slider">
			{/* Control */}
			<div {...api.getControlProps()} className={`${controlBase} ${controlClasses}`} data-testid="slider-control">
				{/* Track */}
				<div
					{...api.getTrackProps()}
					className={`${trackBase} ${trackBg} ${height} ${trackRounded} ${trackClasses}`}
					data-testid="slider-track"
				>
					{/* Meter */}
					<div
						{...api.getRangeProps()}
						className={`${meterBase} ${height} ${meterBg} ${materRounded} ${meterClasses}`}
						data-testid="slider-meter"
					/>
				</div>
				{/* NOTE: this div centers thumbs vertically */}
				<div
					className={`${height}`}
					style={{ display: 'flex', alignItems: 'center', transform: 'translateY(-100%)' }}
					data-testid="slider-thumb-wrapper"
				>
					{api.value.map((_, index) => (
						<div key={index} {...api.getThumbProps({ index })}>
							{/* Thumb */}
							<div
								className={`${thumbBase} ${thumbSize} ${thumbBg} ${thumbRingSize} ${thumbRingColor} ${thumbRounded} ${rxReadOnly} ${thumbClasses}`}
								data-testid="slider-thumb"
							></div>
							{/* Hidden Input(s) */}
							<input {...api.getHiddenInputProps({ index })} data-testid="slider-input" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
