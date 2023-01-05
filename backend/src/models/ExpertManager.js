const AbstractManager = require("./AbstractManager");

class ExpertManager extends AbstractManager {
  constructor() {
    super({ table: "person_expert" });
  }

  insert(decisionId, experts) {
    return this.connection.query(
      `insert into ${this.table} (user_id, name, decision_id) values (?, ?, ?)`,
      [experts[0].user_id, experts[0].name, decisionId]
    );
  }
}

module.exports = ExpertManager;
