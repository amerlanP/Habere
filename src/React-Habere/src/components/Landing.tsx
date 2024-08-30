// import React from "react";
import Tile from "./Tile";
import TopMenu from "./TopMenu";
import React, { useState, useEffect } from "react";
import type { Habit } from "../utils/types.ts";


function Landing(props: { userName: string, email: string }) {

  const userName = props.userName;
  const email = props.email;
  const [habitsList, setHabitsList] = useState<Array<Habit>>([]);

  useEffect(() => {
    async function getHabits() {
      try {
        const data = await fetch(`/api/habits/getHabits?email=${email}`).then(
          (response) => response.json()
        );

        await data.sort((a: Habit, b: Habit) => b.streak - a.streak);

        const limit = Math.min(data.length, 3);

        for (let i = 0 ; i < limit ; i++) {
          setHabitsList((prevHabits) => [...prevHabits, data[i]]);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getHabits();
  }, [email]);

  return (
    <div>

      <TopMenu></TopMenu>
      <div className="dashboard-pane">
        <h1 className="welcome-msg">Welcome back, {userName}</h1>
        <section className="tile-group-1">
          <div className="indivTile">
            <Tile title="Account" content="See your account details here" to="/account"></Tile>
          </div>
          <div className="indivTile">
            <Tile title="Dashboard" content="Your personal habit tracking" to="/dashboard"></Tile>
          </div>
          {/* <div className="indivTile">
            <Tile title="Social" content="Your friends and groups" to="/social"></Tile>
          </div> */}
        </section>
        <section className="highlights">
          <h2>Habit Highlights</h2>
          {habitsList?.map((habit, index) => (
            <li key={index}>
              <p>{habit.name}: {habit.streak} day streak</p>
            </li>
          ))}
        </section>
      </div>
    </div>
    
    
  );
}

export default Landing;
