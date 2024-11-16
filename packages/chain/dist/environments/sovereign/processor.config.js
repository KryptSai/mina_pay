import { Processor } from "@proto-kit/processor";
import { config, databaseModule, modules } from "../../processor";
export const processor = Processor.from({
    modules: {
        Database: databaseModule,
        ...modules,
    },
});
export default async (args) => {
    processor.configurePartial({
        ...config,
        Database: {},
    });
    return processor;
};
