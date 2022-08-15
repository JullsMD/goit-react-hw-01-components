import users from 'components/profile/user.json';
import data from 'components/statistics/data.json';
import friends from 'components/friend-list/friends.json';
import transactions from 'components/transaction-history/transactions.json';

import Container from 'components/container/Container.styled';
import Title from 'components/Title/Title'
import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import FriendList from 'components/friend-list/FriendList';
import TransactionHistory from 'components/transaction-history/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Title>1 - Профіль соціальної мережі</Title>
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        followers={users.stats.followers}
        views={users.stats.views}
        likes={users.stats.likes}
      />
      <Title>2- Секція статистики</Title>
      <Statistics title="Upload stats" stats={data} />
      <Title>3 - Список друзів</Title>
      <FriendList friends={friends} />
      <Title>4 - Історія транзакцій</Title>
      <TransactionHistory items={transactions} />
    </Container>
  );
};

export default App;
