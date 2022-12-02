import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CreateVotes from "./CreateVotes";
import Votes from "./Votes";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { connect, getContract } from "./contract";


function App() {
  const [contract, setContract] = useState(null);
  const [connected, setConnected] = useState(false);
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    window.ethereum.request({method: "eth_accounts"}).then((accounts) =>{
      if(accounts.length > 0){
        handleConnect();
      }else setConnected(false);
    });
  }, []);

  const handleConnect = () => {
    setConnected(true);
    getContract().then(({contract, signer}) => {
      setContract(contract);
     
    if (contract) {
      signer.getAddress().then((address) => {
          contract.members(address).then((result) => setIsMember(result));
      });
    }
  });
  };

  const connectWallet = async () => {
    const { contract } = await connect();
    setContract(contract);
    if (contract) {
      setConnected(true);
    }
  };

  const register = async () => {
    if (!contract) {
      alert("Please connect Metamask wallet");
      return;
    }

    await contract.join().then(() => {
      alert("Joined - You can now vote");
      setIsMember(true);
    }).catch((error) => alert(error.message));
  }

  return (
    <Router>
      <Navbar 
        connect={ connectWallet } 
        connected={ connected} 
        register={register} 
        isMember={isMember}
      />

      <div className="container">
        <Routes>
          <Route path="create-vote" element={ <CreateVotes contract={ contract} />} />
          <Route path="votes" element={ <Votes/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
