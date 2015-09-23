var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          // Surrounding a JS expression in braces inside JSX as an attribute or child
          // lets us drop React components into the tree. 
          {this.props.author} // `author` named attribute passed as a key
        </h2>
        {this.props.children} // nested elements
      </div>
    );
  }
});
