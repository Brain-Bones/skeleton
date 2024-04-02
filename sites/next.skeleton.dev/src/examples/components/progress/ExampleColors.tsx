import { Progress } from '@skeletonlabs/skeleton-react';

export default () => {
	return (
		<div className="flex flex-col gap-8 w-full">
			<Progress value={50} />
			<Progress value={50} meterBg="bg-secondary-500" />
			<Progress value={50} meterBg="bg-tertiary-500" />
		</div>
	);
};
