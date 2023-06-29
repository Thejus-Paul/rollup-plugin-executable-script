import fs from "fs";

const executableScript = async () => {
  let executableScriptPath = "";

  return {
    name: "executableScript",
    renderChunk: (code) => `#!/usr/bin/env node\n${code}`,
    generateBundle({ file }) {
      executableScriptPath = file;
    },
    writeBundle() {
      fs.chmodSync(executableScriptPath, 0o755);
    },
  };
};

export default executableScript;
