// When component is first created, we want to GET some JSON, then update state.
// (For our purposes, this is from a static file)

// We will use jQuery to help make an asynchronous request.

var CommentBox = React.createClass(
  getInitialState: function() {
    return {data: []};
  },
  
  // This method is called automatically by React when a component is rendered.

  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        // Key to dynamic updates is `this.setState()`.
        // It replaces the old array of comments with new one from the server.
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
);

