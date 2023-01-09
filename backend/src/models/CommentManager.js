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

  insertComment(comment) {
    return this.connection.query(
      `INSERT into ${this.table} (content, vote, date_creation, user_id, decision_id) values ( ?, ?, ?, ?, ?)`,
      [
        comment.content,
        comment.vote,
        comment.date_creation,
        comment.user_id,
        comment.decision_id,
      ]
    );
  }

  updateComment(comment) {
    return this.connection.query(
      `update ${this.table} set content = ? vote = ? where id=? `,
      [comment.content, comment.vote, comment.id]
    );
  }
}

module.exports = DecisionManager;
