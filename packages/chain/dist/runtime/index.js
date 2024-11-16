import { Balance, VanillaRuntimeModules } from "@proto-kit/library";
import { Balances } from "./modules/balances";
import { PrivateKey } from "o1js";
export const modules = VanillaRuntimeModules.with({
    Balances,
});
const admin = PrivateKey.fromBase58('B62qksotpLyrcW22T66FXVJMttVYzjYn72TeJGhnREcanTbHp7b35eu');
console.log(`Admin private key ${admin.toBase58()}`);
export const config = {
    Balances: {
        totalSupply: Balance.from(10000),
        admin: admin.toPublicKey()
    },
};
export default {
    modules,
    config,
};
