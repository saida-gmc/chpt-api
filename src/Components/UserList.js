import UserCard from "./UserCard";

export default function UserList({ users, loading }) {
  return (
    <div className="list-cards">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      ;
    </div>
  );
}
