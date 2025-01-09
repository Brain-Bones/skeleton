import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Navigation } from '$lib/index.js';

describe('Navigation', () => {
	describe('<Navigation.Rail>', () => {
		const testId = 'nav-rail';

		it('Renders the component', () => {
			const { getByTestId } = render(<Navigation.Rail></Navigation.Rail>);
			expect(getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const { getByTestId } = render(
				<Navigation.Rail>
					<div data-testid="child"></div>
				</Navigation.Rail>
			);
			expect(getByTestId('child')).toBeInTheDocument();
		});

		for (const prop of ['base', 'background', 'padding', 'height', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const { getByTestId } = render(<Navigation.Rail {...{ [prop]: value }} />);
				expect(getByTestId(testId)).toHaveClass(value);
			});
		}

		it('Correctly applies the `width` or `widthExpanded` prop based on the `expanded` prop', () => {
			const width = 'width';
			const widthExpanded = 'widthExpanded';
			const { getByTestId, rerender } = render(
				<Navigation.Rail width={width} widthExpanded={widthExpanded} expanded={false}></Navigation.Rail>
			);
			expect(getByTestId(testId)).toHaveClass(width);
			expect(getByTestId(testId)).not.toHaveClass(widthExpanded);
			rerender(<Navigation.Rail width={width} widthExpanded={widthExpanded} expanded={true}></Navigation.Rail>);
			expect(getByTestId(testId)).not.toHaveClass(width);
			expect(getByTestId(testId)).toHaveClass(widthExpanded);
		});

		describe('Header', () => {
			const testId = 'nav-rail-header';

			it('Renders the component', () => {
				const { getByTestId } = render(<Navigation.Rail header="header"></Navigation.Rail>);
				expect(getByTestId(testId)).toBeInTheDocument();
				expect(getByTestId(testId)).toHaveTextContent('header');
			});

			for (const prop of ['headerBase', 'headerFlexDirection', 'headerJustify', 'headerItems', 'headerGap', 'headerClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const { getByTestId } = render(<Navigation.Rail header="header" {...{ [prop]: value }}></Navigation.Rail>);
					expect(getByTestId(testId)).toHaveClass(value);
				});
			}
		});

		describe('Tiles', () => {
			const testId = 'nav-rail-tiles';

			it('Renders the component', () => {
				const { getByTestId } = render(<Navigation.Rail>tiles</Navigation.Rail>);
				expect(getByTestId(testId)).toBeInTheDocument();
				expect(getByTestId(testId)).toHaveTextContent('tiles');
			});

			for (const prop of ['tilesBase', 'tilesFlexDirection', 'tilesJustify', 'tilesItems', 'tilesGap', 'tilesClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const { getByTestId } = render(<Navigation.Rail {...{ [prop]: value }}>tiles</Navigation.Rail>);
					expect(getByTestId(testId)).toHaveClass(value);
				});
			}
		});

		describe('Footer', () => {
			const testId = 'nav-rail-footer';

			it('Renders the component', () => {
				const { getByTestId } = render(<Navigation.Rail footer="footer"></Navigation.Rail>);
				expect(getByTestId(testId)).toBeInTheDocument();
				expect(getByTestId(testId)).toHaveTextContent('footer');
			});

			for (const prop of ['footerBase', 'footerFlexDirection', 'footerJustify', 'footerItems', 'footerGap', 'footerClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const { getByTestId } = render(<Navigation.Rail footer="footer" {...{ [prop]: value }} />);
					expect(getByTestId(testId)).toHaveClass(value);
				});
			}
		});
	});

	describe('<Navigation.Bar>', () => {
		const testId = 'nav-bar';

		it('Renders the component', () => {
			const { getByTestId } = render(<Navigation.Bar></Navigation.Bar>);
			expect(getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const { getByTestId } = render(
				<Navigation.Bar>
					<div data-testid="child"></div>
				</Navigation.Bar>
			);
			expect(getByTestId('child')).toBeInTheDocument();
		});

		for (const prop of ['base', 'background', 'width', 'height', 'padding', 'classes']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const { getByTestId } = render(<Navigation.Bar {...{ [prop]: value }} />);
				expect(getByTestId(testId)).toHaveClass(value);
			});
		}
	});

	describe('<Navigation.Tile>', () => {
		const testId = 'nav-tile';

		it('Renders the component', () => {
			const { getByTestId } = render(
				<Navigation.Rail>
					<Navigation.Tile id="0"></Navigation.Tile>
				</Navigation.Rail>
			);
			expect(getByTestId(testId)).toBeInTheDocument();
		});

		it('Renders the children', () => {
			const { getByTestId } = render(
				<Navigation.Rail>
					<Navigation.Tile id="0">
						<div data-testid="child"></div>
					</Navigation.Tile>
				</Navigation.Rail>
			);
			expect(getByTestId('child')).toBeInTheDocument();
		});

		for (const prop of ['base', 'width', 'aspect', 'background', 'hover', 'gap', 'rounded']) {
			it(`Correctly applies the \`${prop}\` prop`, () => {
				const value = 'foo';
				const { getByTestId } = render(<Navigation.Tile id="0" {...{ [prop]: value }} />);
				expect(getByTestId(testId)).toHaveClass(value);
			});
		}

		it('Correctly applies the `padding` or `expandedPadding` prop based on the `expanded` prop', () => {
			const padding = 'padding';
			const expandedPadding = 'expandedPadding';
			const { getByTestId, rerender } = render(
				<Navigation.Rail expanded={false}>
					<Navigation.Tile id="0" padding={padding} expandedPadding={expandedPadding}></Navigation.Tile>);
				</Navigation.Rail>
			);
			expect(getByTestId(testId)).toHaveClass(padding);
			expect(getByTestId(testId)).not.toHaveClass(expandedPadding);
			rerender(
				<Navigation.Rail expanded={true}>
					<Navigation.Tile id="0" padding={padding} expandedPadding={expandedPadding}></Navigation.Tile>);
				</Navigation.Rail>
			);
			expect(getByTestId(testId)).not.toHaveClass(padding);
			expect(getByTestId(testId)).toHaveClass(expandedPadding);
		});

		it('Correctly applies the `gap` or `expandedGap` prop based on the `expanded` prop', () => {
			const gap = 'gap';
			const expandedGap = 'expandedGap';
			const { getByTestId, rerender } = render(
				<Navigation.Rail expanded={false}>
					<Navigation.Tile id="0" gap={gap} expandedGap={expandedGap}></Navigation.Tile>);
				</Navigation.Rail>
			);
			expect(getByTestId(testId)).toHaveClass(gap);
			expect(getByTestId(testId)).not.toHaveClass(expandedGap);
			rerender(
				<Navigation.Rail expanded={true}>
					<Navigation.Tile id="0" gap={gap} expandedGap={expandedGap}></Navigation.Tile>);
				</Navigation.Rail>
			);
			expect(getByTestId(testId)).not.toHaveClass(gap);
			expect(getByTestId(testId)).toHaveClass(expandedGap);
		});

		it('Correctly applies the `classes` or `expandedClasses` prop based on the `expanded` prop', () => {
			const classes = 'classes';
			const expandedClasses = 'expandedClasses';
			const { getByTestId, rerender } = render(
				<Navigation.Rail expanded={false}>
					<Navigation.Tile id="0" classes={classes} expandedClasses={expandedClasses}></Navigation.Tile>);
				</Navigation.Rail>
			);
			expect(getByTestId(testId)).toHaveClass(classes);
			expect(getByTestId(testId)).not.toHaveClass(expandedClasses);
			rerender(
				<Navigation.Rail expanded={true}>
					<Navigation.Tile id="0" classes={classes} expandedClasses={expandedClasses}></Navigation.Tile>);
				</Navigation.Rail>
			);
			expect(getByTestId(testId)).not.toHaveClass(classes);
			expect(getByTestId(testId)).toHaveClass(expandedClasses);
		});

		it('Correctly applies the `active` prop based on wether the tile is active', async () => {
			const active = 'active';
			const { getByTestId, rerender } = render(
				<Navigation.Rail>
					<Navigation.Tile id="0" active={active} selected={false}></Navigation.Tile>
				</Navigation.Rail>
			);
			expect(getByTestId(testId)).not.toHaveClass('active');
			rerender(
				<Navigation.Rail>
					<Navigation.Tile id="0" active={active} selected={true}></Navigation.Tile>
				</Navigation.Rail>
			);
			expect(getByTestId(testId)).toHaveClass('active');
		});

		describe('Label', () => {
			const testId = 'nav-tile-label';

			it('Renders the component', () => {
				const { getByTestId } = render(
					<Navigation.Rail>
						<Navigation.Tile id="0" label="label"></Navigation.Tile>
					</Navigation.Rail>
				);
				expect(getByTestId(testId)).toBeInTheDocument();
				expect(getByTestId(testId)).toHaveTextContent('label');
			});

			for (const prop of ['labelBase', 'labelClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const { getByTestId } = render(
						<Navigation.Rail>
							<Navigation.Tile id="0" label="label" {...{ [prop]: value }}></Navigation.Tile>
						</Navigation.Rail>
					);
					expect(getByTestId(testId)).toHaveClass(value);
				});
			}
		});

		describe('LabelExpanded', () => {
			const testId = 'nav-tile-label-expanded';

			it('Renders the component', () => {
				const { getByTestId } = render(
					<Navigation.Rail expanded={true}>
						<Navigation.Tile id="0" labelExpanded="labelExpanded"></Navigation.Tile>
					</Navigation.Rail>
				);
				expect(getByTestId(testId)).toBeInTheDocument();
				expect(getByTestId(testId)).toHaveTextContent('labelExpanded');
			});

			for (const prop of ['labelExpandedBase', 'labelExpandedClasses']) {
				it(`Correctly applies the \`${prop}\` prop`, () => {
					const value = 'foo';
					const { getByTestId } = render(
						<Navigation.Rail expanded={true}>
							<Navigation.Tile id="0" labelExpanded="labelExpanded" {...{ [prop]: value }}></Navigation.Tile>
						</Navigation.Rail>
					);
					expect(getByTestId(testId)).toHaveClass(value);
				});
			}
		});
	});
});
