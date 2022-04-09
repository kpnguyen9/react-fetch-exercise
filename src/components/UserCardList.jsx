const UserCardList = (props) => {
  const { selectedUser } = props;
  return (
    <div>
      <p>User that we found: {selectedUser.user.login}</p>
    </div>
  );
};

export default UserCardList;
