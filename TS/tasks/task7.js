const user = {
  id: 1,
  login: 'test',
  role: 'user',
}

const checkPermissionsDecorator = (roles) => {
  return (user) => {
      return roles.includes(user.role);
  }
}

const checkPermission = checkPermissionsDecorator(['admin']);
const hasPermissions = checkPermission(user);

console.log(hasPermissions);