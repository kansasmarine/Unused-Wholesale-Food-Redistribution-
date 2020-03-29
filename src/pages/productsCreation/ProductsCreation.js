import React from "react";
import { Container, Grid, Header, Card, Label, Input, Button } from "semantic-ui-react";
import { Form, Field } from "react-final-form";
import api from '../../api/api'

const ProductsCreation = () => {
	const { Column, Row } = Grid;
	const onSubmit = values => {
		console.log(values);
	};
	return (
		<Container textAlign="center">
			
			<Form onSubmit={onSubmit}>
				{({ handleSubmit }) => {
					return (
						<form onSubmit={handleSubmit}>
							<Card fluid>
								<Header as="h1" textAlign="center">
									Create A Product
								</Header>
								<Grid divided style={{ margin: 14 }} columns={2} centered stackable>
									<Row>
										<Column textAlign="center">
											<Label ribbon color="red">
												Name
											</Label>
											<Field name="name" component={Input} />
										</Column>
										<Column textAlign="center">
											<Label ribbon color="green">
												Price
											</Label>
											<Field name="price" component={Input} />
										</Column>
									</Row>
									<Row>
										<Column textAlign="center">
											<Button onClick={handleSubmit} color="teal">
												Create Product
											</Button>
										</Column>
									</Row>
								</Grid>
							</Card>
						</form>
					);
				}}
			</Form>
		</Container>
	);
};

export default ProductsCreation;
