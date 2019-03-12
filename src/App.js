import React, { Component } from 'react';
import './App.css';
import { Dropdown, Menu, Icon, List } from 'semantic-ui-react'

const style = {
    marginLeft: 12,
};

const data = [
    {
        "time": "9:00",
        "name": "Registration",
        "description": ""
    },
    {
        "time": "9:30",
        "name": "Welcome",
        "description": ""
    },
    {
        "time": "9:45",
        "name": "Keynote: Building Evolutionary Architectures - Rebecca Parsons, CTO at ThoughtWorks",
        "description": "For many years, software architecture was described as 'the parts that are hard to change later'. But then microservices showed that if architects build evolvability into the architecture, change becomes easier. This talk, based on the recently published book Building Evolutionary Architectures co-authored by Rebecca anf Neal Ford, investigates how to build evolvable systems. The software development ecosystem exists in a state of dynamic equilibrium, where any new tool, framework or technique leads to disruption and the establishment of a new equilibrium."
    },
    {
        "time": "10:50",
        "name": "Laptop Devops: Putting Modern Infrastructure Automation to Work For Local Development - Marcos Mercuri & Daniel Lockman",
        "description": "A talk around various development environment automations us and other ThoughtWorkers have seen and built on many different projects, and learnings around best practices. We've seen serious work put into this drastically increase the productivity of developers, and solve a lot of the problems that microservices can otherwise cause."
    },
    {
        "time": "11.35am",
        "name": "Break",
        "description": ""
    },
    {
        "time": "11.50am",
        "name": "A Microservices Journey - Susanne Kaiser",
        "description": "The journey from monolith to microservices is different for every organization. A variety of challenges come with introducing microservices itself, but also organizational circumstances impacting the transformation that needed to be considered. In this talk I would like to share some lessons learned from a microservices journey from a startup perspective - and in hindsight, what to watch out for if starting the journey again."
    },
    {
        "time": "12.30pm",
        "name": "Lunch break",
        "description": ""
    }
]


class App extends Component {
    render() {
        const listItems = data.map(talk => <List.Item>
            <List.Icon name='github' size='large' verticalAlign='middle' />
            <List.Content>
                <List.Header as='a'>{talk.name}</List.Header>
                <List.Description as='a'>{talk.description}</List.Description>
            </List.Content>
        </List.Item>)

        return (
            <div>
                <Menu attached='top'>
                    <Dropdown item icon='wrench' simple>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Icon name='dropdown' />
                                <span className='text'>New</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item header>Xconf 2019</Menu.Item>
                    <Menu.Menu position='right'>
                        <div className='ui right aligned category search item'>
                            <div className='ui transparent icon input'>
                                <input className='prompt' type='text' placeholder='Search animals...' />
                                <i className='search link icon' />
                            </div>
                            <div className='results' />
                        </div>
                    </Menu.Menu>
                </Menu>

                <List divided relaxed>
                    {listItems}
                </List>
            </div>
        );
    }
}

export default App;
