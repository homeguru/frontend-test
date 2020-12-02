import os from "os";
import path from "path";
import fs from "fs";
import * as cluster from 'cluster';
import server from './server';
import {Config} from "./config.interface";
import {ErrorLevels} from "./errorLevels";

const environment = process.env.NODE_ENV || 'development';
const developmentServer = environment === 'development' || environment === 'local';

// default config
let ServerConfig: Config = {
    AlertEmail: "",
    Cert: {
        Crt: "",
        Key: ""
    },
    ErrorsConfig: {
        AlertLevel: ErrorLevels.CRITICAL,
        RestartOnCritical: false,
        ShowErrors: developmentServer
    },
    MultiThreadCount: os.cpus().length,
    MultiThreadEnabled: false,

    Ports: {
        HTTP: parseInt(process.env.DEFAULT_PORT || "3000", 10),
        HTTPS: parseInt(process.env.SECURE_PORT || "3001", 10)
    },

    Proxies: []
};

// initialize user config
const configPath = process.env.CONFIGPATH || path.join(__dirname, '..', 'server.config.json');
if (fs.existsSync(configPath)) {
    const cfg = JSON.parse(fs.readFileSync(configPath).toString('utf-8')) as unknown as Config;
    ServerConfig = {
        ...ServerConfig,
        ...cfg
    };
}

if (ServerConfig.MultiThreadEnabled) {
    if (ServerConfig.MultiThreadCount > 1) {
        if (cluster.isMaster) {
            console.log('Server master is initialized...');
            let workers: cluster.Worker[] = [];

            for (let i = 0; i < ServerConfig.MultiThreadCount; i++) {
                const worker = cluster.fork();
                worker.on('message', (message) => {
                    console.log(`Cluster #${worker.id}>> ${message}`)
                })
                worker.on('online', () => {
                    console.log(`Cluster #${worker.id}>> Online`)
                })
                workers.push(worker);
            }
        } else {
            server(ServerConfig);
        }
    } else {
        server(ServerConfig);
    }
} else {
    server(ServerConfig);
}
