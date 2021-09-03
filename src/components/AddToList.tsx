import React, { useState } from 'react';
import { IPerson } from '../types/types';

interface IProps {
	setPeople: React.Dispatch<React.SetStateAction<IPerson[]>>
	people: Array<IPerson>
}

const AddToList: React.FC<IProps> = ({ setPeople, people }) => {
	const [input, setInput] = useState({
		name: "",
		age: "",
		url: "",
		note: ""
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		});
	}

	const handleSubmit = (): void => {
		setPeople([...people, input])
	}

	return (
		<div className="AddToList">
			<input
				type="text"
				placeholder="Name"
				className="AddToList-input"
				value={input.name}
				name="name"
				onChange={(e) => handleChange(e)}
			/>
			<input
				type="text"
				placeholder="Age"
				className="AddToList-input"
				value={input.age}
				onChange={(e) => handleChange(e)}
				name="age"
			/>
			<input
				type="text"
				placeholder="Image URL"
				className="AddToList-input"
				value={input.url}
				onChange={(e) => handleChange(e)}
				name="url"
			/>
			<textarea
				placeholder="Note"
				className="AddToList-input"
				value={input.note}
				onChange={handleChange}
				name="note"
			/>
			<button onClick={handleSubmit}>
				Add To List
			</button>
		</div>
	)
}

export default AddToList;