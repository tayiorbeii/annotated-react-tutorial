// Update the CommentBox component to use the new components in tutorial2.js
var CommentBox = React.createClass({
  render: function() {
    return (
      // HTML components are regular React components, except the JSX compiler
      // automatically rewrites them to React.createElement(tagName) expressions.
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
