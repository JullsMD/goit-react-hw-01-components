import PropTypes from 'prop-types';
import defaultImage from 'components/defaultImg.jpg';
import styles from './css/FriendListItem.module.css';
import { FaPaw } from 'react-icons/fa';
const FriendListItem = ({ avatar = defaultImage, isOnline, name }) => {
  return (
    <li className={styles.item}>
      <FaPaw className={isOnline ? styles.online : styles.offline} />
      {/* <span class='status'></span> */}
      <img className={styles.avatar} src={avatar} alt={name} width="60" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImage,
};
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;