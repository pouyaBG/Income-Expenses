const TransActionsComponent = ({ transactions }) => {
  return (
    <section className="transactions-first-section">
      <div className="search-input">
        <label>Search</label>
        <input className="fillter-input" type="text" />
      </div>
      {transactions.map((t) => (
        <div
          key={t.id}
          className={`${
            t.type === "Expense" ? "Ex" : "In"
          } transactions-section`}>
          <div>{t.description}</div>
          <div className="">
            {t.type === "Expense" ? (
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
