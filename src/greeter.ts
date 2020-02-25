interface User {
  name: string;
}

const greeter = (user: User): string => `Hello ${user.name}!`;

export default greeter;
