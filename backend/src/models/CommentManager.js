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
}

module.exports = CommentManager;
