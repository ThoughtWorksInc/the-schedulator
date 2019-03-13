import React, { Component } from 'react';
import './App.css';
import { Card } from 'semantic-ui-react'

const { Content, Meta, Header } = Card

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

        return (
            <div>
                <Card>
                    <Content>
                        <Header>Manchester</Header>
                        <Meta>
                            <span className='date'>July Sometime 2019</span>
                        </Meta>
                    </Content>
                </Card>

                <Card onClick={() => alert("Hey ya!") }>
                    <Content>
                        <Header>
                            Munich
                        </Header>
                        <Meta>
                            <span className='date'>July Sometime 2019</span>
                        </Meta>
                    </Content>
                </Card>

                <Card>
                    <Content>
                        <Header>Barcelona</Header>
                        <Meta>
                            <span className='date'>July Sometime 2019</span>
                        </Meta>
                    </Content>
                </Card>
            </div>
        );
    }
}

export default App;
