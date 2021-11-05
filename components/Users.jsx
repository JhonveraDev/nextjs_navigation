import Router from "next/router";

const Users = (props) => {
  return (
    <ul className="list-group">
      {props.DataUsers.map((user) => (
        <li
          key={user.id}
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        onClick={e => Router.push('/users/[id]',`/users/${user.id}`)}>
          <div>
            <h5>
              {user.first_name} {user.last_name}
            </h5>
            <p>Email:{user.email}</p>
          </div>
          <img
            src={user.avatar}
            alt={user.avatar + user.last_name}
            style={{ borderRadius: "50%" }}
          ></img>
        </li>
      ))}
    </ul>
  );
};

export default Users;
