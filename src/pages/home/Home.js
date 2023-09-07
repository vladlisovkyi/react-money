import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

// styles
import styles from "./Home.module.css";

// components
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

export default function Home() {
  const { user } = useAuthContext();
  const [userTransatcions, setUserTransactions] = useState([]);

  const { documents, error } = useCollection("transactions");
  console.log(documents);

  useEffect(() => {
    if (user && documents) {
      const filteredTransactions = documents.filter(
        (transaction) => transaction.uid === user.uid
      );
      setUserTransactions(filteredTransactions);
    }
  }, [user, documents]);
  if (user === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={userTransatcions} />}
      </div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
}
