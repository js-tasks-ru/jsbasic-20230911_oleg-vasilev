const showSalary = (users, age) => {
  return users.filter((user) => (user.age <= age))
                  .map((user) => `${user.name}, ${user.balance}`)
                      .join('\n')
}

// const showSalary = (user, age) => {
//   let arr = [];
//   for (let item of user) {
//       if(item.age <= age) {
//           arr.push(`${item.name} ${item.balance}`);
//       }
//   }
//   return arr.join(`\n ` );
// }
