// We should refresh the list of comments to include the new one a user submits.
// This is done by passing data from child component to its parent.


var CommentBox = React.createClass({
  loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status,err) {
        console.error(this.props.url, status, err.toString())
      }.bind(this)
    });
  },

  handleCommentSubmit: function(comment) {
    // TODO: submit to the server and refresh the list  
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        // Pass data from child component up to its parent
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
});
