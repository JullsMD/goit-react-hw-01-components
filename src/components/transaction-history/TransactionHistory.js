import PropTypes from 'prop-types';
import styles from './css/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.TransactionHistory}>
    <thead className={styles.thead}>
      <tr>
        <th className={styles.th}>Type</th>
        <th className={styles.th}>Amount</th>
        <th className={styles.th}>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.tbody}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={styles.td}>{type}</td>
          <td className={styles.td}>{amount}</td>
          <td className={styles.td}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

export default TransactionHistory;
