import * as Blockly from "blockly";
import "blockly/python";

Blockly.Blocks["new_boundary_function"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput("Boundary Function Name"),
      "Name"
    );
    this.appendStatementInput("Content").setCheck(null);
    this.setInputsInline(true);
    this.setColour(315);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
