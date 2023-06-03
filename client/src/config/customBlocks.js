import Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

// Define the custom block for controlling Arduino's built-in LED
Blockly.Blocks["arduinoBuiltInLed"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Control Arduino Built-in LED")
      .appendField(
        new Blockly.FieldDropdown([
          ["ON", "1"],
          ["OFF", "0"],
        ]),
        "STATE"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#66c2a5");
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
          ["0", "0"],
          ["1", "1"],
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
          ["HIGH", "1"],
          ["LOW", "0"],
        ]),
        "STATE"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#66c2a5");
    this.setTooltip("Set the state of a digital pin on the Arduino board");
    this.setHelpUrl("");
  },
};

pythonGenerator["arduino_digital_write"] = function (block) {
  const dropdown_pin = block.getFieldValue("PIN");
  const dropdown_state = block.getFieldValue("STATE");

  // Set the pin state
  return "board.digital[" + dropdown_pin + "].write(" + dropdown_state + ")\n";
};

Blockly.Blocks["arduinoDigitalRead"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Read digital input pin")
      .appendField(
        new Blockly.FieldDropdown([
          ["0", "0"],
          ["1", "1"],
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
      );
    this.setOutput(true, "Boolean");
    this.setColour("#66c2a5");
    this.setTooltip(
      "Reads the value of a digital input pin on the Arduino board"
    );
    this.setHelpUrl("https://pyfirmata.readthedocs.io/");
  },
};

pythonGenerator["arduinoDigitalRead"] = function (block) {
  const pin = block.getFieldValue("PIN");
  const code = "board.digital[" + pin + "].read()";
  return [code, pythonGenerator.ORDER_ATOMIC];
};

Blockly.Blocks["arduino_pin_mode"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Set pin")
      .appendField(
        new Blockly.FieldDropdown([
          ["0", "0"],
          ["1", "1"],
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
      .appendField("mode to")
      .appendField(
        new Blockly.FieldDropdown([
          ["INPUT", "INPUT"],
          ["OUTPUT", "OUTPUT"],
          ["INPUT_PULLUP", "INPUT_PULLUP"],
        ]),
        "MODE"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#66c2a5");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

pythonGenerator["arduino_pin_mode"] = function (block) {
  const dropdown_pin = block.getFieldValue("PIN");
  const dropdown_mode = block.getFieldValue("MODE");
  return (
    "board.digital[" +
    dropdown_pin +
    "].mode = pyfirmata." +
    dropdown_mode +
    "\n"
  );
};

Blockly.Blocks["arduino_analog_write"] = {
  init: function () {
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField("Analog Write Pin");
    this.appendValueInput("VALUE")
      .setCheck("Number")
      .appendField("Value (0-5)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#66c2a5");
    this.setTooltip("Control the analog output of an Arduino pin");
    this.setHelpUrl("https://www.arduino.cc/en/Reference/AnalogWrite");
  },
};

pythonGenerator["arduino_analog_write"] = function (block) {
  const value_pin = pythonGenerator.valueToCode(
    block,
    "PIN",
    pythonGenerator.ORDER_ATOMIC
  );
  const value_value = pythonGenerator.valueToCode(
    block,
    "VALUE",
    pythonGenerator.ORDER_ATOMIC
  );

  return "board.digital[" + value_pin + "].write(" + value_value + ")\n";
};

Blockly.Blocks["arduinoDigitalWrite"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Arduino Digital Write")
      .appendField("Pin")
      .appendField(new Blockly.FieldTextInput("13"), "PIN");
    this.appendValueInput("STATE").setCheck("Boolean").appendField("State");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#66c2a5");
    this.setTooltip("Write a digital state to an Arduino pin");
    this.setHelpUrl("");
  },
};

pythonGenerator["arduinoDigitalWrite"] = function (block) {
  const pin = block.getFieldValue("PIN");
  const state = pythonGenerator.valueToCode(
    block,
    "STATE",
    pythonGenerator.ORDER_ATOMIC
  );

  return `board.digital[${pin}].write(${state})\n`;
};

Blockly.Blocks["arduinoTone"] = {
  init: function () {
    this.appendValueInput("PIN")
      .setCheck("Number")
      .appendField("Set tone on pin");
    this.appendValueInput("FREQUENCY")
      .setCheck("Number")
      .appendField("with frequency");
    this.appendValueInput("DURATION")
      .setCheck("Number")
      .appendField("for duration");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#66c2a5");
    this.setTooltip("Generate a tone on the Arduino board.");
    this.setHelpUrl(
      "https://pyfirmata.readthedocs.io/en/latest/pyfirmata.html#pyfirmata.ArduinoMega.tone"
    );
  },
};

pythonGenerator["arduinoTone"] = function (block) {
  const pin = pythonGenerator.valueToCode(
    block,
    "PIN",
    pythonGenerator.ORDER_ATOMIC
  );
  const frequency = pythonGenerator.valueToCode(
    block,
    "FREQUENCY",
    pythonGenerator.ORDER_ATOMIC
  );
  const duration = pythonGenerator.valueToCode(
    block,
    "DURATION",
    pythonGenerator.ORDER_ATOMIC
  );

  return `board.digital[${pin}].write(1)\nboard.digital[${pin}].mode = pyfirmata.PWM\nboard.digital[${pin}].write({ frequency: ${frequency}, duty_cycle: 0.5, duration: ${duration} })\n`;
};

// Define the custom block for initializing serial communication on a board
Blockly.Blocks["boardSerialInit"] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Initialize Serial Communication")
            .appendField("Baud Rate")
            .appendField(
                new Blockly.FieldNumber(9600, 0),
                "BAUD_RATE"
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#66c2a5");
        this.setTooltip("Initialize serial communication on the board");
        this.setHelpUrl("");
    },
};

// Define the generator function for the custom block
pythonGenerator["boardSerialInit"] = function (block) {
    const baudRate = block.getFieldValue("BAUD_RATE");

    // Initialize the serial communication with the specified baud rate
    return "board.serial_init(" + baudRate + ")\n";
};


// Define the custom block for serial printing
Blockly.Blocks["boardSerialPrint"] = {
    init: function () {
        this.appendValueInput("DATA")
            .setCheck(null)
            .appendField("Serial Print");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#66c2a5");
        this.setTooltip("Print data to the serial monitor");
        this.setHelpUrl("");
    },
};

// Define the generator function for the custom block
pythonGenerator["boardSerialPrint"] = function (block) {
    const data = pythonGenerator.valueToCode(block, "DATA", pythonGenerator.ORDER_ATOMIC);

    // Generate the code for serial printing
    return "board.serial_print(" + data + ")\n";
};
