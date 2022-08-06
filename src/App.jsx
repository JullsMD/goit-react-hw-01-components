import users from 'components/profile/user.json';
import friends from 'components/friend-list/friends.json';
import data from 'components/statistics/data.json';
import transactions from 'components/transaction-history/transactions.json';


import Container from 'components/container/Container';
import Profile from 'components/profile/Profile';
import FriendList from 'components/friend-list/FriendList';
import Statistics from 'components/statistics/Statistics';
import TransactionHistory from 'components/transaction-history/TransactionHistory';

export const App = () => {
  return (
        <Container>
      <FriendList friends={friends} />
      <Profile
username={users.username}
tag={users.tag}
location={users.location}
avatar={users.avatar}
followers={users.stats.followers}
views={users.stats.views}
likes={users.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />;
      <TransactionHistory items={transactions} />
</Container>
  );
};

export default App;

