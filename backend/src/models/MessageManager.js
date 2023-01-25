const AbstractManager = require("./AbstractManager");

class MessageManager extends AbstractManager {
  constructor() {
    super({ table: "message_help" });
  }

  insertMessage(message) {
    return this.connection.query(
      `insert into ${this.table} (username, email, content) values (?, ?, ?)`,
      [message.username, message.email, message.content]
    );
  }
}

module.exports = MessageManager;
