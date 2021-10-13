// Library imports
import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';

// File imports
import 'styles/index.scss';
import { Router } from 'views/components';
import { store } from 'store';

const App = (): ReactElement => {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
};

export default App;
