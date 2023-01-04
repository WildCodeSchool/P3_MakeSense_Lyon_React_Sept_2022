const AbstractManager = require("./AbstractManager");

class ExpertManager extends AbstractManager {
  constructor() {
    super({ table: "person_expert" });
  }

  insert(expert) {
    return this.connection.query(
      `insert into ${this.table} (user_id, decision_id) values (?, ?)`,
      [expert.user_id, expert.decision_id]
    );
  }
}

module.exports = ExpertManager;
