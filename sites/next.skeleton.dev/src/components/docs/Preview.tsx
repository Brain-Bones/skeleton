import React from 'react';

type PreviewProps = {
	selected: 'preview' | 'code' | 'codeReact' | 'codeSvelte';
	preview: React.ReactNode;
	code: React.ReactNode;
	codeReact: React.ReactNode;
	codeSvelte: React.ReactNode;
};

/** Create preview/code tabs for showcasing features. */
export const Preview: React.FC<PreviewProps> = (props) => {
	const [selected, setSelected] = React.useState(props.selected || 'preview');
	const cTab = 'border-b-[1px] border-transparent pb-2 hover:[&>span]:preset-tonal-primary';
	const cTabControl = 'block p-2 px-4 capitalize rounded-container';
	const cTabActive = '!border-surface-950-50';

	function selectedClass(tab: string) {
		if (tab === selected) return cTabActive;
	}

	return (
		<div className="mt-4 space-y-4">
			{/* Tabs */}
			<nav className="border-b-[1px] border-surface-200-800 flex gap-4">
				{/* Tab: Preview */}
				{props.preview && (
					<button className={`${cTab} ${selectedClass('preview')}`} onClick={() => setSelected('preview')}>
						<span className={`${cTabControl}`}>Preview</span>
					</button>
				)}
				{/* Tab: Code (generic) */}
				{props.code && (
					<button className={`${cTab} ${selectedClass('code')}`} onClick={() => setSelected('code')}>
						<span className={`${cTabControl}`}>{props.codeReact || props.codeSvelte ? 'Generic' : 'Code'}</span>
					</button>
				)}
				{/* Tab: Code (React) */}
				{props.codeReact && (
					<button className={`${cTab} ${selectedClass('codeReact')}`} onClick={() => setSelected('codeReact')}>
						<span className={`${cTabControl}`}>React</span>
					</button>
				)}
				{/* Tab: Code (Svelte) */}
				{props.codeSvelte && (
					<button className={`${cTab} ${selectedClass('codeSvelte')}`} onClick={() => setSelected('codeSvelte')}>
						<span className={`${cTabControl}`}>Svelte</span>
					</button>
				)}
			</nav>
			{/* Panel: Preview */}
			<div className={`card-enhanced flex justify-center items-center p-8 ${props.preview && selected === 'preview' ? 'block' : 'hidden'}`}>
				{props.preview}
			</div>
			{/* Panel: Code (Generic) */}
			<div className={`w-full max-w-full ${props.code && selected === 'code' ? 'block' : 'hidden'}`}>{props.code}</div>
			{/* Panel: Code (React) */}
			<div className={`w-full max-w-full ${props.codeReact && selected === 'codeReact' ? 'block' : 'hidden'}`}>{props.codeReact}</div>
			{/* Panel: Code (Svelte) */}
			<div className={`w-full max-w-full ${props.codeSvelte && selected === 'codeSvelte' ? 'block' : 'hidden'}`}>{props.codeSvelte}</div>
		</div>
	);
};
