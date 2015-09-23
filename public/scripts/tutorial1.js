
// Pass in some methods to createClass to create a new React component.
// "render" is the most important; it returns a tree of react components
// that will eventually render to HTML.
var CommentBox = React.createClass({
  render: function(){
    return (
        // These div tags are not DOM nodes, but rather instances of React div components.
        // Think of them like markers that React knows how to handle.
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

// React.render() instantiates the root component as <CommentBox />, and injects it into
// a raw DOM element provided as the second argument (in this case `the element with id='content'`)
React.render(
  // Note that native HTML elements are lowercase, and custom are uppercase.
  <CommentBox />,
  document.getElementById('content')
);

