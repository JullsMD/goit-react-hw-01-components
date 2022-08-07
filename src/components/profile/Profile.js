import PropTypes from 'prop-types';
import defaultImg from 'components/defaultImg.jpg';
import {
  Card,
  Description,
  Avatar,
  Username,
  Tag,
  Location,
  Item,
  Stats,
  Label,
  Quantity,
} from 'components/profile/Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar = defaultImg,
  followers,
  views,
  likes,
}) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt={username} width="100" />
        <Username>{username}</Username>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
