import React from 'react';

export default function Card(props) {
	console.log(props);
	return (
		<div className="card">{props.text}</div>
	);
}
