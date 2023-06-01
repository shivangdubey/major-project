import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

// Define the custom block for controlling Arduino's built-in LED
Blockly.Blocks["arduinoBuiltInLed"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Control Arduino Built-in LED")
      .appendField(
        new Blockly.FieldDropdown([
          ["ON", "HIGH"],
          ["OFF", "LOW"],
        ]),
        "STATE"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Control the Arduino's built-in LED");
    this.setHelpUrl("");
  },
};

// Define the generator function for the custom block
pythonGenerator["arduinoBuiltInLed"] = function (block) {
  const state = block.getFieldValue("STATE");

  // Control the built-in LED
  return "board.digital[13].write(" + state + ")\n";
};

Blockly.Blocks["arduino_digital_write"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Set pin")
      .appendField(
        new Blockly.FieldDropdown([
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
          ["9", "9"],
          ["10", "10"],
          ["11", "11"],
          ["12", "12"],
          ["13", "13"],
        ]),
        "PIN"
      )
      .appendField("to")
      .appendField(
        new Blockly.FieldDropdown([
          ["HIGH", "HIGH"],
          ["LOW", "LOW"],
        ]),
        "STATE"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Set the state of a digital pin on the Arduino board");
    this.setHelpUrl("");
  },
};

pythonGenerator["arduino_digital_write"] = function (block) {
  const dropdown_pin = block.getFieldValue("PIN");
  const dropdown_state = block.getFieldValue("STATE");

  // Import the necessary libraries
    let code = "from pyfirmata import Arduino\n";
    code += "import time\n\n";

  // Connect to the Arduino board
  code += 'board = Arduino("COM3")\n\n';

  // Set the pin state
  code += "board.digital[" + dropdown_pin + "].write(" + dropdown_state + ")\n";
  code += "time.sleep(1)\n\n";

  // Disconnect from the Arduino board
  code += "board.exit()\n";

  return code;
};

Blockly.Blocks["stringOf"] = {
  init: function () {
    this.appendValueInput("FIND").setCheck("String").appendField("string");
    this.appendValueInput("VALUE").setCheck("String").appendField("substring");
    this.appendValueInput("END")
      .setCheck("String")
      .appendField(
        new Blockly.FieldDropdown([
          ["indexOf", "FIRST"],
          ["lastIndexOf", "END"],
        ]),
        "MODE"
      );
    this.setOutput(true, "String");
    this.setColour(160);
    this.setHelpUrl("http://www.w3schools.com/jsref/jsref_length_string.asp");
  },
};

pythonGenerator["stringOf"] = function (block) {
  let code;
  // Search the text for a substring.
  const find = pythonGenerator.valueToCode(
    block,
    "FIND",
    pythonGenerator.ORDER_ATOMIC
  );
  const value = pythonGenerator.valueToCode(
    block,
    "VALUE",
    pythonGenerator.ORDER_ATOMIC
  );
  const mode = block.getFieldValue("MODE");
  if (mode === "FIRST") {
    code = value + ".index(" + find + ")";
  } else {
    code = value + ".rindex(" + find + ")";
  }
  return [code, pythonGenerator.ORDER_MEMBER];
};
