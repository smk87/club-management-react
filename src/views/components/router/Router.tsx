// Library import
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// File import
import { routes } from 'routes';

export const Router: React.FC = () => (
	<BrowserRouter>
		<Suspense fallback={''}>
			<Switch>
				{Object.keys(routes).map((key: string, index: number) => {
					return <Route exact path={routes[key].path} component={routes[key].component} key={index} />;
				})}
			</Switch>
		</Suspense>
	</BrowserRouter>
);
