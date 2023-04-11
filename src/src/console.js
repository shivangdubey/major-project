import React, { useState } from "react";

import "../css/console.css";

const Console = () => {
  const [output, setOutput] = useState([]); // State for terminal output
  const [input, setInput] = useState(""); // State for user input

  // Handler for handling user input
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // Handler for handling Enter key press
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      // Add user input to terminal output
      setOutput((prevOutput) => [
        ...prevOutput,
        { type: "input", content: `> ${input}` },
      ]);
      // Handle the command based on input value
      handleCommand(input);
      // Clear user input
      setInput("");
    }
  };

  // Handler for handling commands
  const handleCommand = (command) => {
    // You can implement your own logic for handling commands here
    // For example, you can update the terminal output based on the command
    // and perform corresponding actions or show results
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: "output", content: `Command: ${command}` },
    ]);
  };

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
            placeholder="Enter command..."
          />
        </div>
      </div>
      <div className="console-buttons">
        {/* Buttons go here */}
        <button className="console-button">Run the Block-based Program</button>
        <button className="console-button">Stop Running Program</button>
        <button className="console-button">Clear Terminal Output</button>
        <button className="console-button">Run Python File</button>
        <button className="console-button">Soft Reset Device</button>
      </div>
    </div>
  );
};

export default Console;
