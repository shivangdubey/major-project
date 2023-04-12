import React, { useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import * as Blockly from "blockly/core";
import "blockly/blocks";
import { javascriptGenerator } from "blockly/javascript";
import { pythonGenerator } from "blockly/python";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"; // Import language tools for autocomplete
import "../css/blocks.css";

import workspaceConfig from "../config/workspaceConfig";
import toolboxCategories from "../config/toolboxCategories";

export default function App() {
  const [json, setJson] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  const [pythonCode, setPythonCode] = useState("");

  const initialJson = {};

  function workspaceDidChange(workspace) {
    const javascriptCode = javascriptGenerator.workspaceToCode(workspace);
    setJavascriptCode(javascriptCode);

    const pythonCode = pythonGenerator.workspaceToCode(workspace);
    setPythonCode(pythonCode);

    console.log(javascriptCode);
  }

  return (
    <div className="container">
      <div className="blockly-container">
        <BlocklyWorkspace
          toolboxConfiguration={toolboxCategories}
          className="blockly-workspace"
          workspaceConfiguration={workspaceConfig}
          onWorkspaceChange={workspaceDidChange}
          onJsonChange={setJson}
        />
      </div>
      <div className="ace-container">
        <AceEditor
          mode="python"
          theme="monokai"
          value={javascriptCode}
          onChange={setJavascriptCode}
          readOnly={true}
          fontSize={15}
          showPrintMargin={true}
          highlightActiveLine={false}
          setOptions={{
            showLineNumbers: true,
            showGutter: true,
            highlightGutterLine: false,
            lineHeight: 1.5
          }}
          style={{
            pointerEvents: "none"
          }}
          height="100vh"
          width="100%"
        />
      </div>
    </div>
  );
}
