import { useEffect, useState } from 'react';

const TransActionsComponent = ({ transactions }) => {
  // transactions filled
  // 1. copy all transactions
  // 2. fillter by name
  const [searchUser, setSearchUser] = useState('');
  const [fillteredTra, setFillteredTra] = useState(transactions);
  const fillteredTransaction = (search) => {
    if (!search || search === '') {
      setFillteredTra(transactions);
      return;
    }
    const fillterd = transactions.filter((t) =>
      t.description.toLowerCase().includes(search)
    );
    setFillteredTra(fillterd);
  };

  const searchHandler = (e) => {
    setSearchUser(e.target.value);
    fillteredTransaction(e.target.value);
  };
  useEffect(() => {
    fillteredTransaction(searchUser);
  }, [transactions]);

  return (
    <section className='transactions-first-section'>
      <div className='search-input'>
        <label>Search</label>
        <input
          className='fillter-input'
          type='text'
          value={searchUser}
          onChange={searchHandler}
        />
      </div>
      {fillteredTra.map((t) => (
        <div
          key={t.id}
          className={`${
            t.type === 'Expense' ? 'Ex' : 'In'
          } transactions-section`}>
          <div>{t.description}</div>
          <div className=''>
            {t.type === 'Expense' ? (
              <span>Expense : - {t.amount}$</span>
            ) : (
              <span>Income : {t.amount}$</span>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TransActionsComponent;
