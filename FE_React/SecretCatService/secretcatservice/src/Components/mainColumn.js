import React from 'react';
import AgentCard from './agentCard';

const MainComponent = () => {
	// https://jsfiddle.net/adenF/a8fh1ugd/15/
	const catsAPIKey = "f0d697ee-9659-48f3-ac88-e374015dff5a";
	const agents = [
		{
			photo: `https://api.thecatapi.com/v1/images/search?format=src&size=small&api_key=${catsAPIKey}`,
			name: "Angus",
			email: "ang@gmail.com"
		},{
			photo: `https://api.thecatapi.com/v1/images/search?format=src&size=full&mime_types=gif&api_key=${catsAPIKey}`,
			name: "Bradock",
			email: "bra@gmail.com"
		},{
			photo: `https://api.thecatapi.com/v1/images/search?category_ids=2&format=src&api_key=${catsAPIKey}`,
			name: "Camus",
			email: "cam@gmail.com"
		},{
			photo: `https://api.thecatapi.com/v1/images/search?format=src&size=small&api_key=${catsAPIKey}`,
			name: "Doctor",
			email: "doc@gmail.com"
		}
	];

		return (
			<AgentCard agents={agents} />
		);

}

export default MainComponent;