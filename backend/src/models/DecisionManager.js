const AbstractManager = require("./AbstractManager");

class DecisionManager extends AbstractManager {
  constructor() {
    super({ table: "decision" });
  }

  insert(decision) {
    return this.connection.query(
      `insert into ${this.table} (title, content, impact, risk, date_decision_creation, date_decision_conflict, date_decision_final_planned, date_decision_close) values (?, ?, ?, ?,?, ?, ?, ?)`,
      [
        decision.title,
        decision.content,
        decision.impact,
        decision.risk,
        decision.date_decision_creation,
        decision.date_decision_conflict,
        decision.date_decision_final_planned,
        decision.date_decision_close,
      ]
    );
  }

  update(decision) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [decision.title, decision.id]
    );
  }
}

module.exports = DecisionManager;
