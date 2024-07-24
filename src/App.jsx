import { useFetchReducer } from "./fetchReducer/useFetchReducer";
function App() {
  const { data, isLoading, error } = useFetchReducer("users");
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="2">USERS</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
