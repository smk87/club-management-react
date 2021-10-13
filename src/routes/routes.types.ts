interface RouteObject {
	path: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	component?: React.ComponentType<any>;
}

export interface Route {
	readonly [key: string]: RouteObject;
}
