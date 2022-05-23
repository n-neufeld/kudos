//*=====================> GET AUTHOR <=====================*//
export const getAuthor = (users, kudo) => {
  const author = users.find((u) => u.userId === kudo.author);
  return author.name;
};

//*=====================> GET RECIPIENT <=====================*//
export const getRecipient = (users, kudo) => {
  const recipient = users.find((u) => u.userId === kudo.recipient);
  return recipient.name;
};
