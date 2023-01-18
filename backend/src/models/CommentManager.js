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

  deleteCommentByDecisionId(decisionId) {
    return this.connection.query(
      `DELETE FROM ${this.table} where decision_id = ?`,
      [decisionId]
    );
  }

  getCommentsByDecisionByUser(decisionId) {
    return this.connection.query(
      `SELECT comment.user_id, comment.decision_id, comment.vote, comment.content, comment.date_creation, user.firstname, user.lastname 
      FROM ${this.table}
      JOIN user ON ${this.table}.user_id=user.id
      WHERE decision_id = ?`,
      [decisionId]
    );
  }
}

module.exports = CommentManager;
