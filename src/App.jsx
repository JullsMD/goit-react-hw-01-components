import users from 'components/profile/user.json';
import data from 'components/statistics/data.json';
import friends from 'components/friend-list/friends.json';
import transactions from 'components/transaction-history/transactions.json';

import Container from 'components/container/Container';
import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import FriendList from 'components/friend-list/FriendList';
import TransactionHistory from 'components/transaction-history/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        followers={users.stats.followers}
        views={users.stats.views}
        likes={users.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;
