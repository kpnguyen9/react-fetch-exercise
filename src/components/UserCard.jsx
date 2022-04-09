const UserCard = (props) => {
  const { selectedUser } = props;
  return (
    <ul>
      <li>User ID: {selectedUser.id}</li>
      <li>User repository URL: {selectedUser.repository_url}</li>
    </ul>
  );
};

export default UserCard;
