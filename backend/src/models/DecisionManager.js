const AbstractManager = require("./AbstractManager");

class decisionController extends AbstractManager {
  constructor() {
    super({ table: "decision" });
  }

  insert(decision) {
    return this.connexion.query(
      `insert into ${this.table} (title, content, date_decision_final_planned) values ( ?, ?, ?)`,
      [decision.title, decision.content, decision.date_decision_final_planned]
    );
  }

  update(decision) {
    return this.connexion.query(
      `update ${this.table} set title = ? where id = ?`,
      [decision.title]
    );
  }
}

module.exports = decisionController;
