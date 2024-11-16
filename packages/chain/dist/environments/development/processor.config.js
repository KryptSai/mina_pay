import { Processor, DatabasePruneModule } from "@proto-kit/processor";
import { config, databaseModule, modules } from "../../processor";
export const processor = Processor.from({
    modules: {
        Database: databaseModule,
        DatabasePruneModule: DatabasePruneModule,
        ...modules,
    },
});
export default async (args) => {
    processor.configurePartial({
        ...config,
        Database: {},
        DatabasePruneModule: {
            pruneOnStartup: args.pruneOnStartup,
        },
    });
    return processor;
};
