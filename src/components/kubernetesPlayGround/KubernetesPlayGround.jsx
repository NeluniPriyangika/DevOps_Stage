import './kubernetesPlayGround.css';
import React, { useState } from 'react';

const Terminal = () => {
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

    if (command === 'kubectl get nodes') {
      // Simulating output for 'ls -lrt' command
      commandOutput = `NAME        STATUS   ROLES    AGE    VERSION\n` +
                      `node-1      Ready    master   2d     v1.21.2\n` +
                      `node-2      Ready    worker   1d     v1.21.2\n` +
                      `node-3      Ready    worker   1d     v1.21.2\n` +
                      `node-4      Ready    worker   1d     v1.21.2\n` +
                      `node-5      Ready    worker   1d     v1.21.2\n` +
                      `node-6      Ready    worker   1d     v1.21.2\n` +
                      `node-7      Ready    worker   1d     v1.21.2`;
    } else if (command === 'kubectl get pods') {
      // Simulating output for 'pwd' command
      commandOutput = `NAME                     READY   STATUS           RESTARTS   AGE\n` +
                      `nginx-1                  1/1     Running          0          1d\n` +
                      `nginx-2                  1/1     Running          0          1d\n` +
                      `mysql-1                  1/1     Running          0          2d\n` +
                      `redis-1                  1/1     Running          0          3d\n` +
                      `frontend-1               2/2     Running          0          5h\n` +
                      `frontend-2               2/2     Running          1          2d\n` +
                      `backend-1                1/1     Running          0          1d\n` +
                      `backend-2                1/1     Running          0          1d\n` +
                      `worker-1                 1/1     Running          0          3d\n` +
                      `api-1                    1/1     Running          0          1d\n` +
                      `api-2                    1/1     CrashLoopBackOff 5          2d\n` +
                      `mysql-1                  0/1     Completed        2          1h\n` +
                      `mysql-2                  0/1     Pending          0          4h`;
    } else if (command === 'kubectl get deployments') {
      // Simulating output for 'df -h' command
      commandOutput = `NAME        READY   UP-TO-DATE   AVAILABLE   AGE\n` +
					`nginx       3/3     3            3           2d\n` +
					`mysql       1/1     1            1           3d\n` +
					`redis       2/2     2            2           1d\n` +
					`frontend    2/2     2            2           1h\n` +
					`backend     2/2     2            2           3d`;

    } 
    else {
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
        <h1>Kubernetes Play-Ground - 1 Master node and 6 worker nodes</h1>
        <h2 className='decstext'>*************This is a simple kubernetes cluster with 1 master and 6 worker nodes.************* <br></br>
        ************You can try out "kubectl" commands, try out depoying your applications and get the understanding about a basic kubernetes cluster.************ <br></br>
        ************Please use this for educational purpose only. You wil loose your changes once the page is refreshed. ************
        </h2>
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

export default Terminal;

