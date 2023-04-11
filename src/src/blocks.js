import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import * as Blockly from "blockly";

import "../css/blocks.css";
import "./custom_blocks";

import workspaceConfig from '../config/workspaceConfig';
import toolboxCategories from '../config/toolboxCategories';

export default function App() {
  const [json, setJson] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");

  const initialJson = {};

  function workspaceDidChange(workspace) {
    // const code = Blockly.JavaScript.workspaceToCode(workspace);
    // setJavascriptCode(code);
  }

  return (
    <div>
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        className="fill-height"
        workspaceConfiguration={workspaceConfig}
        onWorkspaceChange={workspaceDidChange}
        onJsonChange={setJson}
      />
    </div>
  );
}
