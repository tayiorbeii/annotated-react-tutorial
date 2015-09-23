// Replace the hard-coded data with dynamic data from server.
// We will remove the data prop and replace it with a URL to fetch.
//
// This component is different than our others in that it will have to re-render
// since it won't have any data until the server request comes back.

React.render(
  <CommentBox url="comments.json" />,
  document.getElementById('content')
);

// Note: code won't work at this stage.
