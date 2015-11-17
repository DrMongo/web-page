MainLayout = React.createClass({

  componentDidMount() {
    DocHead.setTitle('Dr. Mongo');
    DocHead.addLink({rel: 'icon', href: '/favicon.ico?v=1.0'});
  },

  render() {
    return (
      <div>
        <div className="text-center">
          {this.props.content}
        </div>
        <footer>
          <div className="m-y">
            Dr. Mongo
          </div>
        </footer>
      </div>
    );
  }
});
