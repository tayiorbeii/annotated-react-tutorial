// By using this feature we are relying on marked to be secure.

var Comment = React.createClass({
  rawMarkup = function() {
    // passing `santize: true` tells marked to escape any HTML in the source
    // instead of passing it through unchanged.
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return {__html: rawMarkup};
  },

  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
});
