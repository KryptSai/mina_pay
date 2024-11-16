import { appChain } from "../../utils/app-chain";
import { MethodParameterEncoder } from "@proto-kit/module";
export const handleBalancesAddBalance = async (client, block, tx) => {
    const module = appChain.runtime.resolve("Balances");
    const parameterDecoder = MethodParameterEncoder.fromMethod(module, "addBalance");
    // @ts-expect-error
    const [tokenId, address, amount] = await parameterDecoder.decode(tx.tx.argsFields, tx.tx.auxiliaryData);
    const currentAddressBalance = await client.balance.findFirst({
        orderBy: {
            height: "desc",
        },
        where: {
            address: address.toBase58(),
        },
    });
    const newFromBalance = (currentAddressBalance?.amount != null
        ? BigInt(currentAddressBalance.amount)
        : BigInt(0)) + amount.toBigInt();
    await client.balance.create({
        data: {
            address: address.toBase58(),
            height: Number(block.height.toString()),
            amount: newFromBalance > 0n ? newFromBalance.toString() : "0",
        },
    });
};
