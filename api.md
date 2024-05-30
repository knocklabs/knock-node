# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/users.ts">UserDeleteResponse</a></code>

Methods:

- <code title="put /v1/users/{user_id}">client.users.<a href="./src/resources/users.ts">update</a>(userId, { ...params }) -> User</code>
- <code title="get /v1/users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /v1/users/{user_id}">client.users.<a href="./src/resources/users.ts">delete</a>(userId) -> string</code>
- <code title="get /v1/users/{user_id}">client.users.<a href="./src/resources/users.ts">get</a>(userId) -> User</code>
- <code title="post /v1/users/{user_id}/merge">client.users.<a href="./src/resources/users.ts">merge</a>(userId, { ...params }) -> User</code>
