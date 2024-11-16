import { BlockHandler } from "@proto-kit/processor";
import { PrismaClient } from "@prisma/client-processor";
import { Block, TransactionExecutionResult } from "@proto-kit/sequencer";
export declare const handleBalancesAddBalance: (client: Parameters<BlockHandler<PrismaClient>>[0], block: Block, tx: TransactionExecutionResult) => Promise<void>;
//# sourceMappingURL=add-balance.d.ts.map