import React, { useState } from 'react';
import './linuxPlayGround.css';

const LinuxPlayGround = () => {
  const [command, setCommand] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([]);

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      executeCommand();
    }
  };

  const executeCommand = () => {
    let commandOutput = '';

    if (command === 'ls -lrt') {
      // Simulating output for 'ls -lrt' command
      commandOutput = `Filesystem      Size  Used   Avail  Use%\n` +
                   `/dev/sda1       100G  50G    50G    50%\n` +
                   `/dev/sdb1       200G  100G   100G   50%\n` +
                   `/dev/sdc1       500G  200G   300G   40%`;
    } else if (command === 'pwd') {
      // Simulating output for 'pwd' command
      commandOutput = '/home/user';
    } else if (command === 'df -h') {
      // Simulating output for 'df -h' command
      commandOutput = 'Filesystem      Size  Used   Avail  Use%\n/dev/sda1       100G  50G    50G    50%';
    } else {
      // Default output for unknown commands
      commandOutput = `Command not found: ${command}`;
    }

    const commandResult = {
      command,
      output: commandOutput,
    };

    setTerminalHistory([...terminalHistory, commandResult]);
    setCommand('');
  };

  return (
    <div className='page'>
      <div className="terminal">
        <h1>Linux Play-Ground - (Red-Hat)</h1>
        <h4 className='decstext'>This is a sample linux play area where you can proctice the basic linux commands. Please mind the capacity details 
          and all other configurations info are for demostration purpose only. The changes that you make here and everything will be 
          dissapear and start from a new session once page refreses. 
        </h4>
        <div className="body">
          <div className="output">
            {terminalHistory.map((commandResult, index) => (
              <div key={index}>
                <span>$ {commandResult.command}</span>
                <br />
                {commandResult.output}
              </div>
            ))}
          </div>
          <div className="input">
            <span>$</span>
            <input className='inputarea'
              type="text"
              value={command}
              onChange={handleCommandChange}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinuxPlayGround;
