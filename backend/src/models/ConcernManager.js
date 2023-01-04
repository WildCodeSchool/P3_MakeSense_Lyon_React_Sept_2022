const AbstractManager = require("./AbstractManager");

class ConcernManager extends AbstractManager {
  constructor() {
    super({ table: "concern_person" });
  }

  insert(concern) {
    return this.connection.query(
      `insert into ${this.table} (user_id, decision_id) values (?, ?)`,
      [concern.user_id, concern.decision_id]
    );
  }
}

module.exports = ConcernManager;
