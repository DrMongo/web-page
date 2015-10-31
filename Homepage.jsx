Homepage = React.createClass({
  render() {
    return (
      <div>
        <h1><i classN ame="fa fa-heartbeat" /> Dr. Mongo</h1>
        <h3>MongoDB admin app build on MeteorJs.</h3>

        <section>
          <h4>Browse, insert, delete or edit your documents with ease.</h4>
          <img className="screen img-responsive" src="screen-documents.png" />
        </section>

        <section>
          <h4>See Dr. Mongo in action!</h4>
          <a href="http://demo.drmongo.com/" className="btn btn-primary btn-lg"><i className="fa fa-heartbeat" /> Dr. Mongo demo app</a>
        </section>
      </div>
    );
  }
});
