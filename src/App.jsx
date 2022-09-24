import React from 'react';

import Layout from './components/Layout';
import Routing from './Routing';

function App() {
	return (
		<React.Fragment>
			<Layout>
				<Routing />
			</Layout>
		</React.Fragment>
	);
}

export default App;
