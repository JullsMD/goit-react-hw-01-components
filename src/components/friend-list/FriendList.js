import PropTypes from 'prop-types';
import styles from './css/FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.FriendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
