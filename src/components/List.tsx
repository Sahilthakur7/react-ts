import React from 'react';
import { IPerson } from '../types/types';

interface IProps {
	people: Array<IPerson>
}

const List: React.FC<IProps> = ({ people }) => {
	console.log("people---", people);
	return (
		<div>
			Hello
		</div>
	)
}

export default List;