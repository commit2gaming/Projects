# Welcome to SecretCatService

## Mission
> Our mission is o provide a feline secret service with the best agents the world has to offer, using React

## Guidelines
This app will be build with:
- HTML, CSS and JS
- React

## App Structure
---
- [`/`] `<ShowProfiles />` Show a list of all agents
    - `<Navbar />`
    - `<Header />`
        - `<HeaderTitle />`
    - `~ <MainColumn />` List of agents `(commit)`
        - `~ < AgentCard/>` Show agent profile `(commit)`
            - `< AgentCardPhoto/>`
            - `< AgentCardName/>`
            - `< AgentCardEmail/>`
        - `<EditAgents />`
            - `<CreateAgent />`
            - `<ModifyAgent />`
            - `<DeleteAgent />`
        - `<SearchAgent />` Field Search Agent (by name)...

- [`/:id`] `<AgentProfile />` Show specific details of a given agent
    - `<Navbar />`
    - `<Header />`
        - agentCard: photo, name and email
        - agentHabilities: list of habilities
    - `<MainColumn />`
        - `<EditMissions />` create, edit and delete mission
        - `<ShowMissions />` Title, mission, comments
            - `<Comments />` from other agents
---   
            
The structure above depicts the content of the application.
- `< />` React Component
- [ ]: Router path
- `~`: MVP
- `(tag)`: Who's currently working on

## Features to be added in the future
- `<IsSignedIn />`: Manage register, login and logout and the routers
- Deploy
