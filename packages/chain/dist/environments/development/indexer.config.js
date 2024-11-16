import { Indexer } from "@proto-kit/indexer";
import { config, modules } from "../../indexer";
import { DatabasePruneModule } from "@proto-kit/sequencer";
export const indexer = Indexer.from({
    modules: {
        ...modules,
        DatabasePruneModule,
    },
});
export default async (args) => {
    indexer.configurePartial({
        ...config,
        DatabasePruneModule: {
            pruneOnStartup: args.pruneOnStartup,
        },
    });
    return indexer;
};
