const status = require("http-status");
const { PythonShell } = require("python-shell");
const fs = require("fs");
const { spawn } = require("child_process");

module.exports = {
  async runPythonCode(req, res) {
    let path = "./script.py";
    let pythonCode = req.body.pythonCode;
    try {
      fs.readFile("./pfirmata.py", "utf8", (err, data) => {
        if (err) throw err;

        fs.writeFile(path, data, (err) => {
          if (err) throw err;
          fs.appendFile(path, pythonCode, (err) => {
            if (err) throw err;
          });
        });
      });

      let resp = await PythonShell.run(path);

      fs.unlink(path, (err) => {
        if (err) {
          throw err;
        }
      });

      res.json({
        code: status.SUCCESSFUL,
        status: true,
        resp: resp.length > 0 ? resp : ["OK"],
      });
    } catch (e) {
      console.error(e);
      throw {
        code: status.BAD_REQUEST,
        status: false,
        message: "Invalid Request",
      };
    }
  },
  async runBashCommand(req, res) {
    let command = req.body.command;

    // Spawn a new terminal process (bash)
    const terminal = spawn("bash", []);

    // Set encoding to UTF-8 to handle special characters
    terminal.stdin.setDefaultEncoding("utf-8");
    terminal.stdout.setEncoding("utf-8");
    terminal.stderr.setEncoding("utf-8");

    let terminalOutput = "";
    let terminalError = "";

    // Listen for terminal output
    terminal.stdout.on("data", (data) => {
      terminalOutput += data;
    });

    // Listen for terminal errors
    terminal.stderr.on("data", (data) => {
      terminalError += data;
    });

    // When the terminal process exits
    terminal.on("exit", () => {
      // Send the output as JSON response
      res.json({
        status: true,
        terminalOutput,
        terminalError,
      });
    });

    // Send commands to the terminal
    terminal.stdin.write("cd arduino\n");
    terminal.stdin.write(command + "\n");

    // Terminate the terminal process
    terminal.stdin.write("exit\n");
  },
};
