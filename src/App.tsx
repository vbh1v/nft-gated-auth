import { useMemo } from 'react'
import './main.css'
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import ConnectButton from './components/ConnectButton';

// require('@solana/wallet-adapter-react-ui/styles.css');


function App() {

  const solNetwork = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(solNetwork), [solNetwork]);

  const wallets = useMemo(
    () => [
        new PhantomWalletAdapter(),
        new LedgerWalletAdapter(),  
    ],
    [solNetwork]
);

  return (
    <>
    <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets}>
                <WalletModalProvider>
                    <div className="App">
                      <h1>Pirates NFT Blah Blah</h1>
                      <h1>-----Photo----</h1>
                      <ConnectButton />
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    
    </>
  )
}

export default App
