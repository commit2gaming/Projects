import React from 'react';

const AgentCard = (props) => {
	
	const cardList = props.agents.map((agent) =>
		<div key={agent.name} className="card">
			<img alt="" src={agent.photo} height="auto" width="200px"></img>
			<h3>{agent.name}</h3>
			<p>{agent.email}</p>
		</div>
	);

	return(
		<div className="cardList">
			{cardList}
		</div>
	);
	
}

export default AgentCard;