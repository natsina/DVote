import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";


const Votes = ({ contract}) => {
    const gateway = "https://gateway.pinata.cloud/";
    const [votes, setVotes] = useState([]);

    useEffect(() => { 
        if (!contract) return;

        const filter = contract.filters.VoteCreated();
        contract.queryFilter(filter).then((result) => {
            console.log(result);
        })
        .catch((error) => console.log(error))
    }, [contract])
    

    return (
        <div>
            <p>Votes</p>
        </div>
    );
}

export default Votes;