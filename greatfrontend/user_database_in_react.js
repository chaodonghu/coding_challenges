import { useState } from "react";

const generateId = (() => {
  let id = 0;
  return () => `${id++}`;
})();

export default function App() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  // will contain a list of users
  const [users, setUsers] = useState([
    {
      first: "Hans",
      last: "Emil",
      id: generateId(),
    },
    {
      first: "Max",
      last: "Mustermann",
      id: generateId(),
    },
    {
      first: "Roman",
      last: "Tisch",
      id: generateId(),
    },
  ]);

  // Filter users from search term
  const filteredUsers = users.filter(({ first, last }) => {
    return (
      first.toLowerCase().includes(search.toLowerCase()) ||
      last.toLowerCase().includes(search.toLowerCase())
    );
  });

  const hasSelectedUser = !!selected;
  const canCreateUser = !hasSelectedUser && !!first && !!last;
  const canUpdateUser = hasSelectedUser && !!first && !!last;

  // Grab the target value from the select
  const handleSelected = (e) => {
    const newSelected = e.target.value;
    // set our state
    setSelected(newSelected);

    const foundUser = users.find(({ id }) => id === newSelected);
    setFirst(foundUser.first);
    setLast(foundUser.last);
  };

  const handleCreate = () => {
    setUsers([...users, { first, last, id: generateId() }]);
    setFirst("");
    setLast("");
  };

  const handleUpdate = () => {
    const newUsers = [...users];
    const foundUser = newUsers.find(({ id }) => selected === id);
    foundUser.first = first;
    foundUser.last = last;
    setUsers(newUsers);
  };

  const handleCancel = () => {
    setSelected(null);
    setFirst("");
    setLast("");
  };

  const handleDelete = () => {
    setUsers(users.filter(({ id }) => id !== selected));
    handleCancel();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target, event.nativeEvent.submitter);

    const intent = formData.get("intent");

    switch (intent) {
      case "create": {
        handleCreate();
        break;
      }

      case "update": {
        handleUpdate();
        break;
      }

      case "delete": {
        handleDelete();
        break;
      }
      case "cancel": {
        handleCancel();
        break;
      }

      default: {
        throw new Error(`Invalid intent: ${intent}`);
      }
    }
  };

  return (
    <form classname="app" onSubmit={handleSubmit}>
      <div className="root">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          aria-label="Search users"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
        />
        <select
          size={5}
          className="users-list"
          value={selected}
          onChange={handleSelected}
        >
          {filteredUsers.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.first} {user.last}
              </option>
            );
          })}
        </select>

        <label>
          First Name:
          <input
            type="text"
            required
            value={first}
            onChange={(e) => setFirst(e.target.value)}
          />
        </label>

        <label>
          Last Name:
          <input
            type="text"
            required
            value={last}
            onChange={(e) => setLast(e.target.value)}
          />
        </label>

        <div className="buttons">
          <button
            name="intent"
            value="create"
            onClick={handleCreate}
            disabled={!canCreateUser}
          >
            Create
          </button>
          <button
            name="intent"
            value="update"
            onClick={handleUpdate}
            disabled={!canUpdateUser}
          >
            Update
          </button>
          <button
            name="intent"
            value="delete"
            onClick={handleDelete}
            disabled={!hasSelectedUser}
          >
            Delete
          </button>
          <button
            name="intent"
            value="cancel"
            onClick={handleCancel}
            disabled={!hasSelectedUser}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
