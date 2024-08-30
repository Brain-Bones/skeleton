'use client';

import React, { useId } from 'react';

import * as fileUpload from '@zag-js/file-upload';
import { normalizeProps, useMachine } from '@zag-js/react';
import { FileUploadProps } from './types.js';

export const FileUpload: React.FC<FileUploadProps> = ({
	label = `Select file or drag here`,
	subtext = '',
	// Root
	base = '',
	classes = '',
	// Interface
	interfaceBase = 'flex flex-col items-center gap-2 hover:cursor-pointer',
	interfaceBg = 'hover:preset-tonal',
	interfaceBorder = 'border-[1px] border-dashed',
	interfaceBorderColor = 'border-surface-200-800',
	interfacePadding = 'p-4 py-10',
	interfaceRounded = 'rounded-container',
	interfaceClasses = '',
	// Interface (content)
	interfaceIcon = '',
	interfaceText = '',
	interfaceSubtext = 'type-scale-1 opacity-60',
	// Files List
	filesListBase = 'mt-2 space-y-2',
	filesListClasses = '',
	// File
	fileBase = 'grid grid-cols-[auto_1fr_auto] rtl:grid-cols-[1fr_auto_auto] items-center',
	fileBg = 'preset-tonal',
	fileGap = 'gap-4 px-4',
	filePadding = 'py-2',
	fileRounded = 'rounded',
	fileClasses = '',
	// File (content)
	fileIcon = '',
	fileName = 'type-scale-2 flex items-center gap-4',
	fileSize = 'type-scale-1 opacity-60',
	fileButton = '',
	// State
	stateInvalid = 'border-error-500',
	stateDisabled = 'disabled',
	stateDragging = 'preset-filled-primary-500',
	// Children
	children,
	iconInterface,
	iconFile,
	iconFileRemove,
	// Zag
	...zagProps
}) => {
	// Zag
	const [state, send] = useMachine(
		fileUpload.machine({
			id: useId()
		}),
		{ context: zagProps }
	);
	const api = fileUpload.connect(state, send, normalizeProps);

	// Handles i18n for numeric format and unit size
	// Source: https://gist.github.com/lanqy/5193417?permalink_comment_id=4379535
	function bytesToSize(bytes: number): string {
		const units = ['byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte'];
		const navigatorLocal = navigator.languages && navigator.languages.length >= 0 ? navigator.languages[0] : 'en-US';
		const unitIndex = Math.max(0, Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1));
		return Intl.NumberFormat(navigatorLocal, {
			style: 'unit',
			unit: units[unitIndex]
		}).format(bytes / 1024 ** unitIndex);
	}

	// Reactive
	const rxDisabled = state.context.disabled ? stateDisabled : '';
	const rxInvalid = api.rejectedFiles.length > 0 ? stateInvalid : interfaceBorderColor;
	const rxDragging = api.dragging && !children ? stateDragging : '';

	return (
		<div
			{...api.getRootProps()}
			className={`${base} ${rxDisabled} ${classes}`}
			style={{ display: children ? 'inline-block' : 'block' }}
			data-testid="uploader"
		>
			<div {...api.getDropzoneProps()}>
				{/* Hidden Input */}
				<input {...api.getHiddenInputProps()} data-testid="uploader-input" />
				{/* Interface */}
				{children ?? (
					<div
						className={`${interfaceBase} ${interfaceBg} ${interfaceBorder} ${interfacePadding} ${interfaceRounded} ${rxInvalid} ${rxDragging} ${interfaceClasses}`}
						data-testid="uploader-interface"
					>
						{/* Icon */}
						{iconInterface && (
							<span className={interfaceIcon} data-testid="uploader-interface-icon">
								{iconInterface}
							</span>
						)}
						{/* Label */}
						{label && (
							<p className={interfaceText} data-testid="uploader-interface-text">
								{label}
							</p>
						)}
						{/* Subtext */}
						{subtext && (
							<small className={interfaceSubtext} data-testid="uploader-interface-subtext">
								{subtext}
							</small>
						)}
					</div>
				)}
			</div>
			{/* Files (list) */}
			{!children && (
				<ul {...api.getItemGroupProps()} className={`${filesListBase} ${filesListClasses}`} data-testid="uploader-files-list">
					{api.acceptedFiles.map((file) => (
						// File
						<li
							key={file.name}
							{...api.getItemProps({ file })}
							className={`${fileBase} ${fileBg} ${fileGap} ${filePadding} ${fileRounded} ${fileClasses}`}
							data-testid="uploader-file"
						>
							{/* Name */}
							<p {...api.getItemNameProps({ file })} className={fileName} data-testid="uploader-file-name">
								{iconFile ?? (
									<span className={fileIcon} data-testid="uploader-file-icon">
										{iconFile}
									</span>
								)}
								<span>{file.name}</span>
							</p>
							{/* Size */}
							<p {...api.getItemNameProps({ file })} className={fileSize} data-testid="uploader-file-size">
								{bytesToSize(file.size)}
							</p>
							{/* Button */}
							<button {...api.getItemDeleteTriggerProps({ file })} className={fileButton} data-testid="uploader-file-button">
								{iconFileRemove ?? <span>&#x2715;</span>}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
