Homepage = React.createClass({
  render() {

    const installMeteorCommands = hljs.highlight('bash', '$ curl https://install.meteor.com/ | sh');
    const installDrMongoCommands = hljs.highlight('bash', `$ git clone https://github.com/DrMongo/DrMongo.git
$ cd DrMongo
$ meteor --port 3040`);
    const codeClass = 'hljs' + installMeteorCommands.language;

    return (
      <div className="home">
        <div className="jumbo">
          <h2><i className="fa fa-heartbeat" /> Dr. Mongo</h2>
          <h3>Open-source MongoDB admin app build on MeteorJs.</h3>
          <div className="buttons">
            <a className="btn btn-jumbo" href="http://demo.drmongo.com/"><i className="fa fa-arrow-circle-o-down" /> Download</a>
            <a className="btn btn-jumbo" href="https://github.com/DrMongo/DrMongo"><i className="fa fa-github" /> Source</a>
          </div>
        </div>

        <div className="container text-center">
          <section>
            <h1>Browse, insert, delete or edit your documents with ease.</h1>
            <img className="screen img-responsive" src="screen-documents.png" />
          </section>

          <section>
            <h1 className="text-center">Installation</h1>
            <h4 className="m-b-sm">Dr. Mongo runs as a Meteor application, so you need to have Meteor installed, first.</h4>
            <div className="row text-left">
              <div className="col-md-6 col-md-push-3">
                <pre><code className={codeClass} dangerouslySetInnerHTML={{__html: installMeteorCommands.value}} /></pre>
                <div className="text-right">
                  <small><em>More info about installing meteor see <a href="https://www.meteor.com/install">www.meteor.com/install</a></em></small>
                </div>
              </div>
            </div>
            <h4 className="m-b-sm">Clone git repository and run the application</h4>
            <div className="row text-left">
              <div className="col-md-6 col-md-push-3">
                <pre><code className={codeClass} dangerouslySetInnerHTML={{__html: installDrMongoCommands.value}} /></pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
});
