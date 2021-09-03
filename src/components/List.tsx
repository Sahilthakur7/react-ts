import React from 'react';
import { IPerson } from '../types/types';

interface IProps {
	people: Array<IPerson>
}

const List: React.FC<IProps> = ({ people }) => {
	const renderList = (): Array<JSX.Element> => {
		return people.map(p => {
			return (
				<li className="List">
					<div className="List-header">
						<img className="List-img" src={p.url} />
						<h2>{p.name}</h2>
					</div>
					<p>{p.age} years old</p>
					<p className="List-note">{p?.note}</p>
				</li>
			)
		})
	}
	return (
		<ul>
			{renderList()}
		</ul>
	)
}

export default List;