const AbstractManager = require("./AbstractManager");

class DecisionManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  getComments(decisionId) {
    return this.connection.query(
      `SELECT *
      FROM ${this.table}
      JOIN user ON ${this.table}.user_id = user.id
      WHERE decision_id = ?`,
      [decisionId]
    );
  }
}

module.exports = DecisionManager;
