import { cleanResolvers, ValidateTakeArg } from "@proto-kit/processor";
import { applyResolversEnhanceMap, resolvers as generatedResolvers, } from "./generated/type-graphql";
// enhance the generated resolvers with custom middlewares/validations
const resolversEnchanceMap = {
    Block: {
        aggregateBlock: [ValidateTakeArg()],
        blocks: [ValidateTakeArg()],
        groupByBlock: [ValidateTakeArg()],
    },
    Balance: {
        aggregateBalance: [ValidateTakeArg()],
        balances: [ValidateTakeArg()],
        groupByBalance: [ValidateTakeArg()],
    },
};
applyResolversEnhanceMap(resolversEnchanceMap);
// remove non read only generated resolvers and their methods
export const resolvers = cleanResolvers(generatedResolvers);
