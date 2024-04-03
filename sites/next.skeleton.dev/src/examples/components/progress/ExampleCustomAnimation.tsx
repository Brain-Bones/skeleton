import { Progress } from '@skeletonlabs/skeleton-react';

export const Page = () => {
	return (
		<>
			<Progress value={50} meterAnimate="custom-animation" classes="w-full" />
			<style>{`
                .custom-animation {
                    animation: custom-animation 2s ease-in-out infinite;
                }
                @keyframes custom-animation {
                    from {
                        translate: -100%;
                    }
                    50% {
                        width: 100%;
                        translate: 0;
                    }
                    to {
                        width: 100%;
                        translate: 100%;
                    }
                }
            `}</style>
		</>
	);
};
