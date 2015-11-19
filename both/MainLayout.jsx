MainLayout = React.createClass({

  componentDidMount() {
    DocHead.addLink({rel: 'icon', href: '/favicon.ico?v=1.0'});
    DocHead.addMeta({name: 'og:type', content: 'website'});
  },

  render() {
    return (
      <div>
        <div>
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
