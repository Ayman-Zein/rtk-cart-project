import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const Products = () => {
	return (
		<Container>
			<Row>
				<Col>
					<ProductCard />
				</Col>
			</Row>
		</Container>
	);
};

export default Products;
