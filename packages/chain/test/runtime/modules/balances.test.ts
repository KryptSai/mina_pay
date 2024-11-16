import { AppChain, TestingAppChain } from "@proto-kit/sdk";
import { method, PrivateKey, PublicKey } from "o1js";
import { Balances } from "../../../src/runtime/modules/balances";
import { log } from "@proto-kit/common";
import { BalancesKey, TokenId, UInt64 } from "@proto-kit/library";

log.setLevel("ERROR");

describe("balances", () => {
  let adminAddr: PublicKey,
  adminPvtKey: PrivateKey,
  alice: PublicKey,
  alicePrivateKey: PrivateKey,
  tokenId: TokenId,
  appChain: any,
  balances: Balances
  // appChain: TestingAppChain

  beforeAll( async() => {
    adminPvtKey = PrivateKey.random()
    adminAddr = adminPvtKey.toPublicKey()

    alicePrivateKey = PrivateKey.random();
    alice = alicePrivateKey.toPublicKey();
    tokenId = TokenId.from(0);


    appChain = TestingAppChain.fromRuntime({
      Balances,
    });
    appChain.configurePartial({
      Runtime: {
        Balances: {
          totalSupply: UInt64.from(10000),
          admin: adminAddr
        },
      },
    });

    await appChain.start();
    balances = appChain.runtime.resolve("Balances");


  });

  it("should demonstrate how balances work", async () => {   
    appChain.setSigner(adminPvtKey);

    // const balances0 = appChain.runtime.resolve("Balances");
    // balances = appChain.runtime.resolve("Balances");

    const tx1 = await appChain.transaction(adminAddr, async () => {
      await balances.addBalance(tokenId, alice, UInt64.from(1000));
    });

    await tx1.sign();
    await tx1.send();

    const block0 = await appChain.produceBlock();

    const key = new BalancesKey({ tokenId, address: alice });
    const balance = await appChain.query.runtime.Balances.balances.get(key);
    
    expect(block0?.transactions[0].status.toBoolean()).toBe(true);
    expect(balance?.toBigInt()).toBe(1000n);


    // //test treansfer
    // appChain.setSigner(alicePrivateKey);

    // //receiver
    // const bobPrivateKey = PrivateKey.random();
    // const bob = bobPrivateKey.toPublicKey();

    // const balances1 = appChain.runtime.resolve("Balances");
    // // balances = appChain.runtime.resolve("Balances");

    // const tx2 = await appChain.transaction(alice, async () => {
    //   await balances1.transfer(tokenId, alice, bob, UInt64.from(100))
    // });

    // await tx2.sign();
    // await tx2.send();

    // const block1 = await appChain.produceBlock();

    // const keyAlice = new BalancesKey({ tokenId, address: alice });
    // const balanceA = await appChain.query.runtime.Balances.balances.get(keyAlice);
    
    // expect(block1?.transactions[0].status.toBoolean()).toBe(true);
    // expect(balanceA?.toBigInt()).toBe(900n);

    // const keyBob = new BalancesKey({ tokenId, address: bob });
    // const balanceB = await appChain.query.runtime.Balances.balances.get(keyBob);

    // expect(block1?.transactions[0].status.toBoolean()).toBe(true);
    // expect(balanceB?.toBigInt()).toBe(100n);
  }, 1_000_000);

  //test transfer
  it("transfer check", async () => {

    appChain.setSigner(alicePrivateKey);

    //receiver
    const bobPrivateKey = PrivateKey.random();
    const bob = bobPrivateKey.toPublicKey();

    // const balances = appChain.runtime.resolve("Balances");
    // balances = appChain.runtime.resolve("Balances");

    const tx2 = await appChain.transaction(alice, async () => {
     await balances.transferSigned(tokenId, alice, bob, UInt64.from(100))
    });

    await tx2.sign();
    await tx2.send();

    const block = await appChain.produceBlock();

    const keyBob = new BalancesKey({ tokenId, address: bob });
    const balanceB = await appChain.query.runtime.Balances.balances.get(keyBob);

    expect(block?.transactions[0].status.toBoolean()).toBe(true);
    expect(balanceB?.toBigInt()).toBe(100n);
  });
});
