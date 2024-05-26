import React, { useContext } from 'react';
import { BankContext } from '../context/BankContext';

function BankList() {
  const { banks } = useContext(BankContext);

  return (
    <div>
      {banks.map(bank => (
        <div key={bank.bankName}>
          <h2>{bank.bankName}</h2>
          <p>{bank.description}</p>
          <p>{bank.age}</p>
          <img src={bank.url}></img>
        </div>
      ))}
    </div>
  );
}

export default BankList;
