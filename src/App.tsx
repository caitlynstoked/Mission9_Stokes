import React from 'react';
import logo from './logo.svg';
import './App.css';
import teamData from './CollegeBasketballTeams.json';
interface BBProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>Introducing March Madness 2024!!!</h1>;
}

class CollegeBasketball extends React.Component<BBProps> {
  render() {
    const oneBBTeam = this.props;

    return (
      <div className="team-box">
        <h2>School Name:{oneBBTeam.school}</h2>
        <h3>Mascot: {oneBBTeam.name}</h3>
        <h3>City: {oneBBTeam.city}</h3>
        <h3>State: {oneBBTeam.state}</h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="team-list">
      {teamData.teams.map((oneBBTeam) => (
        <CollegeBasketball {...oneBBTeam} />
      ))}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
