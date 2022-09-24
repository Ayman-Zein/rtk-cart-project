import React from 'react';
import AppNavbar from './AppNavbar';

const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<AppNavbar />
			<main className='container pt-4'>{children}</main>
		</React.Fragment>
	);
};

export default Layout;
