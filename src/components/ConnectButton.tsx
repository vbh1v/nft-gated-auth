import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';


const ConnectButton: React.FC = () => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    
    return (
    <div>
        <WalletMultiButton />
    </div>
    )
}

export default ConnectButton;