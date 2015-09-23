var Comment = React.createClass({
  render function () {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        // Calls the marked library, but will render the HTML incorrectly.
        // To workaround, see tutorial7.js
        {marked(this.props.children.toString())}
    );
  }
});

