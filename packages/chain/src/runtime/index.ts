import { Balance, VanillaRuntimeModules } from "@proto-kit/library";
import { ModulesConfig } from "@proto-kit/common";

import { Balances } from "./modules/balances";
import { PrivateKey } from "o1js";

export const modules = VanillaRuntimeModules.with({
  Balances,
});

const admin = PrivateKey.random() //fromBase58('B62qksotpLyrcW22T66FXVJMttVYzjYn72TeJGhnREcanTbHp7b35eu')
console.log(`Admin private key ${admin.toBase58()}`);

export const config: ModulesConfig<typeof modules> = {
  Balances: {
    totalSupply: Balance.from(10_000),
    admin : admin.toPublicKey()
  },
};

export default {
  modules,
  config,
};
