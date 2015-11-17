Homepage = React.createClass({
  render() {
    return (
      <div className="home">
        <div className="jumbo">
          <h2><i className="fa fa-heartbeat" /> Dr. Mongo</h2>
          <h3>Open-source MongoDB admin app build on MeteorJs.</h3>
          <div className="buttons">
            <a className="btn btn-jumbo" href="http://demo.drmongo.com/"><i className="fa fa-heartbeat" /> Demo</a>
            <a className="btn btn-jumbo" href="https://github.com/DrMongo/DrMongo"><i className="fa fa-github" /> Fork me</a>
          </div>
        </div>

        <div className="container">
          <section>
            <h1>Browse, insert, delete or edit your documents with ease.</h1>
            <img className="screen img-responsive" src="screen-documents.png" />
          </section>
        </div>
      </div>
    );
  }
});
