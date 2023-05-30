import React, { useContext } from "react";
import axios from "axios";
import "../css/console.css";
import { API_URL } from "../env.json";
import { UserContext } from "../App";

const Console = () => {
  const { pythonCode, output, setOutput, input, setInput } =
    useContext(UserContext);

  // Handler for handling user input
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // Handler for handling Enter key press
  const handleEnterKeyPress = async (e) => {
    if (e.key === "Enter") {
      // Add user input to terminal output
      setOutput((prevOutput) => [
        ...prevOutput,
        { type: "input", content: `$ ${input}` },
      ]);
      // Handle the command based on input value
      await handleCommand(input);
      // Clear user input
      setInput("");
    }
  };

  // Handler for handling commands
  const handleCommand = async (command) => {
    // You can implement your own logic for handling commands here
    // For example, you can update the terminal output based on the command
    // and perform corresponding actions or show results
    const shellOutput = await axios.request({
      method: "post",
      url: API_URL + "/api/command/run",
      data: { command },
    });

    const out = shellOutput.data.terminalOutput;
    let array = [];
    let currentString = "";

    for (let i = 0; i < out.length; i++) {
      if (out[i] !== "\n") {
        currentString += out[i];
      } else {
        array.push(currentString);
        currentString = "";
      }
    }
    if (currentString !== "") {
      array.push(currentString);
    }

    const error = shellOutput.data.terminalError;

    let commandOutput = [];
    for (const value of array) {
      commandOutput.push({ type: "output", content: `${value}` });
    }

    setOutput((prevOutput) => [
      ...prevOutput,
      ...commandOutput,
      { type: "error", content: `${error}` },
    ]);
  };

  async function runBlockBasedProgram() {
    const shellOutput = await axios.request({
      method: "post",
      url: API_URL + "/api/python/run",
      data: { pythonCode },
    });

    let out = [];
    for (const value of shellOutput.data.resp) {
      out.push({ type: "output", content: `${value}` });
    }

    setOutput((prevOutput) => [...prevOutput, ...out]);
  }

  function clearOutput() {
    setOutput([]);
  }

  return (
    <div className="console-container">
      <div className="console-window">
        {/* Render terminal output */}
        {output.map((item, index) => (
          <div key={index} className={`console-${item.type}`}>
            {item.content}
          </div>
        ))}
        {/* Render input field for user commands */}
        <div className="console-input">
          <input
            type="text"
            value={input}
            onChange={handleInput}
            onKeyPress={handleEnterKeyPress}
            placeholder="$ Enter command..."
          />
        </div>
      </div>
      <div className="console-buttons">
        {/* Buttons go here */}
        <button className="console-button" onClick={runBlockBasedProgram}>
          Run the Block-based Program
        </button>
        <button className="console-button" onClick={clearOutput}>
          Clear Terminal Output
        </button>
      </div>
    </div>
  );
};

export default Console;
