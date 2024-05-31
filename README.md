# PrestaFi

Build: soroban contract build

deploy: 
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/hello_world.wasm \
  --source alice \
  --network testnet

Interact 
soroban contract invoke \
  --id CACDYF3CYMJEJTIVFESQYZTN67GO2R5D5IUABTCUG3HXQSRXCSOROBAN \
  --source alice \
  --network testnet \
  -- \
  hello \
  --to RPC