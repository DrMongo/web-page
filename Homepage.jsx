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
            <a className="btn btn-jumbo" href="https://github.com/DrMongo/DrMongo/archive/master.zip"><i className="fa fa-arrow-circle-o-down" /> Download</a>
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
            <div className="row text-left">
              <div className="col-md-6 col-md-push-3">
                
                <h4 className="m-b-sm m-t-lg">Dr. Mongo runs as a Meteor application, so you need to have Meteor installed, first.</h4>
                <pre><code className={codeClass} dangerouslySetInnerHTML={{__html: installMeteorCommands.value}} /></pre>
                <div className="text-right">
                  <small><em>More info about installing meteor see <a href="https://www.meteor.com/install">www.meteor.com/install</a></em></small>
                </div>

                <h4 className="m-b-sm m-t-lg">Clone git repository and run the application</h4>
                <pre><code className={codeClass} dangerouslySetInnerHTML={{__html: installDrMongoCommands.value}} /></pre>
                <div className="text-right">
                  <small><em>Your Dr. Mongo instance has to be running along with your other Meteor apps, so we use port 3040, but you are free to use any port.</em></small>
                </div>

                <h4 className="m-b-sm m-t-lg">Once your app is running, go to <a href="http://127.0.0.1:3040">http://127.0.0.1:3040</a></h4>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
});
