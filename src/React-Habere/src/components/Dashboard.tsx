import TopMenu from "./TopMenu";
import NewHabit from "./NewHabit.tsx";
import React, { useState, useEffect } from "react";
import type { Habit } from "../utils/types.ts";
import { FaCheck } from "react-icons/fa6";
import { IoFlame } from "react-icons/io5";

//import { RiAddFill } from "react-icons/ri";

//import {Modal, Button} from 'react-bootstrap';

const Dashboard = (props: { email: string }) => {
  const [habitsList, setHabitsList] = useState<Array<Habit>>([]);
  const [isChecked, setChecked] = useState<Array<boolean>>([]);
  const [isDisabled, setButtonDisable]= useState<Array<boolean>>([]);

  const email = props.email;

  //
  //  updates the main view with list of habits retrieved
  //  from the database.
  //
  useEffect(() => {
    async function getHabits() {
      try {
        const data = await fetch(`/api/habits/getHabits?email=${email}`).then(
          (response) => response.json()
        );

        await data.sort((a: Habit, b: Habit) => b.streak - a.streak);

        await data.forEach(function (h: Habit) {
          setHabitsList((prevHabits) => [...prevHabits, h]);
        });


      } catch (error) {
        console.log(error);
      }
    }

    getHabits();

    async function getCompleted() {
      try {
        const data = await fetch(`/api/habits/getHabits?email=${email}`).then(
          (response) => response.json()
        );

        const completedData = await fetch(
          `/api/habits/getCompleted?email=${email}`
        ).then((response) => response.json());

        const length = data.length;

        for (let i = 0; i < length; i++) {
          if (completedData.includes(i))
            setChecked((prevChecked) => [...prevChecked, true]);
          else setChecked((prevChecked) => [...prevChecked, false]);
        }

        // data.forEach(function () {
        //   setChecked((prevChecked) => [...prevChecked, false]);
        // });
      } catch (error) {
        console.log(error);
      }
    }

    getCompleted();
  }, [email]);

  const completeTask = async (index: number, name: string) => {

    const indexStreak = habitsList[index].streak + 1;
    habitsList[index].streak = indexStreak;

    setButtonDisable((prevDisabled) => {
      const temp = [...prevDisabled];
      temp[index] = true;
      return temp;
    });

    console.log("index streak ",indexStreak);
    console.log(index);
    
    const habitId = habitsList[index].id;

    console.log("supposed to be changing ", habitId);
    await fetch("api/habits/complete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ index, email, indexStreak, name}),
    });

    setChecked((prevChecked) => {
      const temp = [...prevChecked];
      temp[index] = true;
      return temp;
    });
  };

  function showNotification() {
    // Check if the browser supports notifications
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notifications');
    } else {
      // Check if the user has granted permission to show notifications
      if (Notification.permission === 'granted') {
        // Create a notification
        console.log("Creating notification");
        const notification = new Notification('Habere', {
          body: 'Time to complete your habits!'
        });
  
        // Optional: Handle click events on the notification
        notification.onclick = function() {
          console.log('Notification clicked');
        };
  
      } else if (Notification.permission !== 'denied') {
        // Ask the user for permission
        Notification.requestPermission().then(function(permission) {
          if (permission === 'granted') {
            showNotification();
          }
        });
      }
    }
  }

  function checkTimeAndNotify() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    if (hours === 12 && minutes === 0) {
      showNotification();
    }
  }

  let demonstrationID: NodeJS.Timeout;
  let flag = 0;

  function resetIntervals() {
    if (flag === 1) {
      clearInterval(demonstrationID);
      flag = 0;
    }
  }
  
  return (
    <div>
      <TopMenu></TopMenu>
      <div className="app" style={{ display: "flex", flexDirection: "column" }}>
        <section className="main">
          <h1>Habits</h1>
          <ul className="feed" role="view-pane">
            {habitsList?.map((habit, index) => (
              <li key={index}>
                <p className="role">{habit.name}</p>
                <button onClick={() => completeTask(index, habit.name)} disabled={isDisabled[index]}>
                  Complete Task
                </button>
                <label className="checkbox-container" style={{ display: "flex", flexDirection: "row" }}>
                  {isChecked[index] && <FaCheck className="dash-icon" />}
                  <IoFlame className="dash-icon" />
                  <p style={{marginTop:'22px', fontSize:'15px'}}>{habit.streak}</p>
                </label>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <NewHabit
            email={email}
            setHabitsList={setHabitsList}
            habitsList={habitsList}    
          />
        </section>
        <div className="bottom-section">
          <div>
            <button onClick={() => {
              resetIntervals();
              Notification.requestPermission();
              setInterval(checkTimeAndNotify, 60000);
                }
              }>Get Notified</button>
            Get notifications at 12:00 PM every day
          </div>
          <div>
            <button onClick={() => {
              resetIntervals();
              Notification.requestPermission();
              demonstrationID = setInterval(showNotification, 20000);
              flag = 1;
                }
              }>Demonstrate</button>
            Get notifications every 20 seconds
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
