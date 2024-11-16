import { Startable } from "@proto-kit/deployment";
import { LogLevelDesc } from "loglevel";
export interface Arguments {
    component: string;
    pruneOnStartup: boolean;
    logLevel: LogLevelDesc;
}
export type StartableFactory = (args: Arguments) => Promise<Startable>;
//# sourceMappingURL=start.d.ts.map