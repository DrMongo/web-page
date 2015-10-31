MainLayout = React.createClass({
  render() {
    return (
      <div>
        <div className="container text-center">
          {this.props.content}
        </div>
        <footer>Dr. Mongo</footer>
      </div>
    );
  }
});
