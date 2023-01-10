const AbstractManager = require("./AbstractManager");

class DecisionManager extends AbstractManager {
  constructor() {
    super({ table: "comment" });
  }

  // used in decision controller to enable fetch of the comments when fetching the decision data
  getComments(decisionId) {
    return this.connection.query(
      `SELECT *
      FROM ${this.table}
      WHERE decision_id = ?`,
      [decisionId]
    );
  }

  // used in comment controller to enable the post of new comments on the front
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

  // functinnal but not deployed on front end yet
  updateComment(comment) {
    return this.connection.query(
      `update ${this.table} set content = ? vote = ? where id=? `,
      [comment.content, comment.vote, comment.id]
    );
  }

  // functinnal but not deployed on front end yet
  deleteComment(comment) {
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
}

module.exports = DecisionManager;
