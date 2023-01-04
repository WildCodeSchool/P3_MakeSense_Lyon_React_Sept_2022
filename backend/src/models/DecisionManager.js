const AbstractManager = require("./AbstractManager");

class DecisionManager extends AbstractManager {
  constructor() {
    super({ table: "decision" });
  }

  insert(decision) {
    return this.connection.query(
      `insert into ${this.table} (title, content, impact, risk, benefits, date_decision_creation, date_decision_conflict, date_decision_close, status_decision, user_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        decision.title,
        decision.content,
        decision.impact,
        decision.risk,
        decision.benefits,
        decision.date_decision_creation,
        decision.date_decision_conflict,
        decision.date_decision_close,
        decision.status_decision,
        decision.user_id,
      ]
    );
  }

  update(decision) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [decision.title, decision.id]
    );
  }

  updateById(decision) {
    return this.connection.query(
      `update ${this.table} set title = ?, content = ?, impact = ?, risk = ?, benefits = ?, status_decision = ?, date_decision_conflict = ? where id = ?`,
      [
        decision.title,
        decision.content,
        decision.impact,
        decision.risk,
        decision.benefits,
        decision.status_decision,
        decision.date_decision_conflict,
        decision.id,
      ]
    );
  }

  findAllWithUserId() {
    return this.connection.query(
      `SELECT ${this.table}.id, title, content, impact, risk, benefits, date_decision_creation, date_decision_conflict,
    date_decision_close, status_decision, user_id, firstname, lastname, avatar
    FROM ${this.table}
    LEFT JOIN user on ${this.table}.user_id = user.id`
    );
  }

  findAllByIdWithUserId(id) {
    return this.connection.query(
      `SELECT ${this.table}.id, title, content, impact, risk, benefits, date_decision_creation, date_decision_conflict,
    date_decision_close, status_decision, ${this.table}.user_id, firstname, lastname, avatar
    FROM ${this.table} 
    LEFT JOIN user on ${this.table}.user_id = user.id
    WHERE ${this.table}.id = ?`,
      [id]
    );
  }
}

module.exports = DecisionManager;
