import { AppBar, ToolBar } from "../../lib/components/AppBar/AppBar.js";

function appbar() {
	return (
		<AppBar>
			<AppBar.Toolbar>
				<ToolBar.Lead>
					<span>💀</span>
					<span>Skeleton</span>
				</ToolBar.Lead>
				<ToolBar.Center>Skeleton</ToolBar.Center>
				<ToolBar.Trail>
					<span>Skeleton</span>
					<span>💀</span>
				</ToolBar.Trail>
			</AppBar.Toolbar>
		</AppBar>
	);
}

function appbarHeadline() {
	return (
		<>
			<h3 className="h3">Headline</h3>
			<AppBar>
				<AppBar.Toolbar>
					<ToolBar.Lead>
						<span>💀</span>
						<span>Skeleton</span>
					</ToolBar.Lead>
					<ToolBar.Trail>
						<span>Skeleton</span>
						<span>💀</span>
					</ToolBar.Trail>
				</AppBar.Toolbar>
				<AppBar.Headline base="text-center">
					<h1 className="h1">Headline</h1>
				</AppBar.Headline>
			</AppBar>
		</>
	);
}

function appbarSticky() {
	return (
		<>
			<h3 className="h3">Sticky</h3>
			<div className="flex flex-col space-y-4 max-h-64 overflow-y-auto">
				<AppBar classes="sticky top-0">
					<AppBar.Toolbar>
						<ToolBar.Lead>
							<span>💀</span>
							<span>Skeleton</span>
						</ToolBar.Lead>
						<ToolBar.Center>Skeleton</ToolBar.Center>
						<ToolBar.Trail>
							<span>Skeleton</span>
							<span>💀</span>
						</ToolBar.Trail>
					</AppBar.Toolbar>
				</AppBar>
				<div>First line of the sticky AppBar</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
				<div>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum minima
					suscipit ipsam ut reiciendis a quia maiores, facere adipisci accusamus
					animi nam porro cum dignissimos! Quibusdam asperiores aliquam
					reiciendis eligendi!
				</div>
			</div>
		</>
	);
}

function appbarA11YKeyboard() {
	return (
		<>
			<h3 className="h3">A11Y Keyboard</h3>
			<button type="button" className="btn preset-filled">
				Button before the AppBar
			</button>
			<AppBar>
				<AppBar.Toolbar>
					<ToolBar.Lead>
						<button
							type="button"
							className="btn-icon preset-filled-primary-500"
						>
							💀
						</button>
						<button type="button" className="btn preset-filled">
							Skeleton
						</button>
					</ToolBar.Lead>
					<ToolBar.Center>Skeleton</ToolBar.Center>
					<ToolBar.Trail>
						<button type="button" className="btn preset-filled">
							Skeleton
						</button>
						<button
							type="button"
							className="btn-icon preset-filled-primary-500"
						>
							💀
						</button>
					</ToolBar.Trail>
				</AppBar.Toolbar>
			</AppBar>
			<button type="button" className="btn preset-filled">
				Button after the AppBar
			</button>
		</>
	);
}

function appbarRTL() {
	return (
		<>
			<h3 className="h3">RTL</h3>
			<div dir="rtl">
				<AppBar>
					<AppBar.Toolbar>
						<ToolBar.Lead>
							<button
								type="button"
								className="btn-icon preset-filled-primary-500"
							>
								💀
							</button>
							<button type="button" className="btn preset-filled">
								lead
							</button>
						</ToolBar.Lead>
						<ToolBar.Center>Skeleton</ToolBar.Center>
						<ToolBar.Trail>
							<button type="button" className="btn preset-filled">
								trail
							</button>
							<button
								type="button"
								className="btn-icon preset-filled-primary-500"
							>
								💀
							</button>
						</ToolBar.Trail>
					</AppBar.Toolbar>
					<AppBar.Headline>
						<h1 className="h1">مرحبا بك</h1>
					</AppBar.Headline>
				</AppBar>
			</div>
		</>
	);
}

export function Component() {
	return (
		<>
			<h1 className="h1">AppBars</h1>
			{appbar()}
			{appbarHeadline()}
			{appbarSticky()}
			{appbarA11YKeyboard()}
			{appbarRTL()}
		</>
	);
}
