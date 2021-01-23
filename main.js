let BlockChain = require("./blockChain");

let blockChain = new BlockChain();

let hash = require("object-hash");
let PROOF = 1560;

let validProof = (proof) => {
  let guessHash = hash(proof);
  console.log("hashing: ", guessHash);
  return guessHash == hash(PROOF);
};

let proofOfWork = () => {
  let proof = 0;
  while (true) {
    if (!validProof(proof)) {
      proof++;
    } else {
      break;
    }
  }
  return proof;
};

if (proofOfWork() == PROOF) {
  blockChain.addNewTransaction("whatsap", "bruh", 200);
  let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;

  blockChain.addNewBlock();
}

console.log("Chain: ", blockChain.chain);
