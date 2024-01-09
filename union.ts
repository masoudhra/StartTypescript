function getRegistedUsers(date: Date | undefined): object[] | undefined | null {
  if (date) {
    // search by date and get rsult and return that
    //if can not find any user in that date return null
    return [{}];
  } else {
    // get all users for today and returm those
    // if can not any users return undifind
    return [{}, {}];
  }
}
