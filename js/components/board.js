import React from 'react';
import List from './list';

const renderLists = lists => {
	return lists.map(list => <List key={list.id} title={list.title} cards={list.cards} />)
}

export default function Board(props) {
	const { title, lists } = props;
	return (
		<div>
			<div className="board-title">{title}</div>
			{renderLists(lists)}
		</div>
	);
}
