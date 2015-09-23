var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        // `Pete Hunt` has been passed via an attribute,
        // and `This is one comment` via a child node to the first comment.
        //
        // The comment component will access these properties through
        // `this.props.author` and `this.props.children`
        <Comment author="Pete Hunt">This is one comment.</comment>
        <Comment author="Jordan Walke">This is *another* comment</comment>
      </div>
    );
  }
});
