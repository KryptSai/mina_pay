import { Indexer } from "@proto-kit/indexer";
import { config, modules } from "../../indexer";
export const indexer = Indexer.from({
    modules,
});
export default async (args) => {
    indexer.configurePartial({
        ...config,
    });
    return indexer;
};
