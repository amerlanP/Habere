import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import type { Habit } from "../utils/types.ts";
import { RiAddFill } from "react-icons/ri";

interface NewHabitProps {
  email: string;
  setHabitsList: React.Dispatch<React.SetStateAction<Array<Habit>>>;
  habitsList: Array<Habit>;
}

const NewHabit: React.FC<NewHabitProps> = ({
  email,
  setHabitsList,
  habitsList,
}) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitDescription, setHabitDesc] = useState("");

  const handleTogglePopUp = () => {
    setShowPopUp(!showPopUp);
  };

  const createHabit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const habit: Habit = {
      id: 0,
      name: habitName,
      description: habitDescription,
      category: "default",
      email: email,
      streak: 0,
    };

    try {
      const response = await fetch("api/habits/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({habit}),
      });


      if (response.ok) {
        setHabitsList([...habitsList, habit]);
        console.log("Habit successfully added");
      }
    } catch (error) {
      console.error("Error occurred: ", error);
    }

  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHabitName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHabitDesc(e.target.value);
  };

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleTogglePopUp}
        className="btn-secondary"
      >
        <RiAddFill />
      </Button>

      <div
        className={`overlay ${showPopUp ? "show" : ""}`}
        onClick={handleTogglePopUp}
      ></div>

      <div className={`pop-up-container ${showPopUp ? "show" : ""}`}>
        <h2>New Habit</h2>
        <p>Tell us about your new goals!</p>

        <form onSubmit={createHabit}>
          <label>
            Habit Name
            <input type="text" name="field1" onChange={handleNameChange} />
          </label>

          <label>
            Description
            <input
              type="text"
              name="field3"
              onChange={handleDescriptionChange}
              style={{ marginBottom: "10px" }}
            />
          </label>

          <Button
            variant="secondary"
            type="submit"
            style={{ marginBottom: "10px" }}
          >
            Submit
          </Button>
          <Button variant="secondary" onClick={handleTogglePopUp}>
            Close
          </Button>
        </form>
      </div>
    </div>
  );
};

export default NewHabit;
