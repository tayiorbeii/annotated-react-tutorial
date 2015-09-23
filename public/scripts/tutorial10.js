// Dynamically render the comments:

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    }); // End commentNodes map
    
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});
