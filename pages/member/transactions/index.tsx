import Sidebar from "components/organisms/Sidebar";
import TransactionContent from "components/organisms/TransactionContent";
import React from "react";

const Transaction = () => {
  return (
    <section className="transactions overflow-auto">
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
};

export default Transaction;
