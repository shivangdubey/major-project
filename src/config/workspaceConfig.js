import * as Blockly from "blockly";

const blocklyConfig = {
  grid: {
    spacing: 10,
    length: 5,
    colour: "#ccc",
    snap: true,
  },
  move: {
    scrollbars: {
      horizontal: true,
      vertical: true,
    },
    drag: true,
    wheel: false,
  },
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1.0,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
    pinch: true,
  },
  trashcan: false,
  theme: {
    base: Blockly.Themes.Classic,
    componentStyles: {
      workspaceBackgroundColour: "#f2f2f2",
      toolboxBackgroundColour: "#2e2e2e",
      toolboxForegroundColour: "#fff",
      flyoutBackgroundColour: "#444",
      flyoutForegroundColour: "#fff",
      flyoutOpacity: 0.9,
      scrollbarColour: "#888888",
      scrollbarOpacity: 0.7,
    },
    fontStyle: { family: "Georgia, serif", weight: "bold", size: 12 },
    startHats: true,
  },
};

export default blocklyConfig;
