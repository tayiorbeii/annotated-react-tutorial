// So far, based on `props`, each component has rendered itself once.
// `props` are immutable. They are passed from- and owned by- the parent.
//
// In order to implement interactions, we introduce mutable state.
//
// `this.state` is private to the component and can be changed by calling `this.setState()`.
//
// `render()` methods are written declaratively as functions of `this.props` and `this.state`.
// When state updates, the component re-renders.
//

var CommentBox = React.createClass({
  //`getInitialState` executes exactly once and sets up the component's initial state (duh).
  getInitialState: function () {
    return {data: []};
  },

  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        
        // New addition:
        <CommentList data={this.state.data} />
        
        <CommentForm />
      </div>
    );
  }

});
