const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  insert(comment) {
    return this.connection.query(
      `insert into ${this.table} (content, user_id, decision_id, vote) values (?,?,?,?)`,
      [comment.comment, comment.userId, comment.decisionId, "contre"]
    );
  }

  // getComments(comment) {}

  deleteCommentByDecisionId(decisionId) {
    return this.connection.query(
      `DELETE FROM ${this.table} where decision_id = ?`,
      [decisionId]
    );
  }

  getCommentsByDecisionByUser(decisionId) {
    return this.connection.query(
      `SELECT user_id, decision_id, vote, content, date_creation 
      FROM ${this.table}
      JOIN user ON ${this.table}.user_id=user.id
      WHERE decision_id = ?`,
      [decisionId]
    );
  }
}

module.exports = CommentManager;
