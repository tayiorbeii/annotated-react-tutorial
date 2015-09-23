// Get the JSON comment data in tutorial8.js into CommentList in a modular way.
//

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});


React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
