Homepage = React.createClass({
  render() {

    const installMeteorCommands = hljs.highlight('bash', '$ curl https://install.meteor.com/ | sh');
    const installDrMongoCommands = hljs.highlight('bash', `$ git clone https://github.com/DrMongo/DrMongo.git
$ cd DrMongo
$ meteor --port 3040`);
    const codeClass = 'hljs' + installMeteorCommands.language;

    const features = {
      tableTree: {title: '2-in-1: Table & tree'},
      favorite: {title: 'Favorite filters'},
      colors: {title: '9 color themes for databases'},
      foreign: {title: 'Foreign _id relations'},
      searchId: {title: 'Search _id, everywhere'},
    };

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
            <div className="h1">Browse, insert, delete or edit your documents with ease.</div>
            <img className="screen img-responsive m-t-lg m-b-md" src="/screens/documents.png" />
          </section>
        </div>

        <div id="killer-features" className="m-t-lg">

          <section className="p-y-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-8 vertical-center">
                  <div className="visible-xs-block visible-sm-block h1 text-center m-b-md">{features.tableTree.title}</div>
                  <img className="screen img-responsive" src="/screens/pinned.png" />
                </div>
                <div className="col-md-4 text-center vertical-center">
                  <div className="hidden-xs hidden-sm h1">{features.tableTree.title}</div>
                  <div className="h3 m-t-md">Table & tree view combined. Pin the most important attributes of your documents.</div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-y-lg m-y-md">
            <div className="container">
              <div className="row">
                <div className="col-md-push-2 col-md-4 text-center vertical-center">
                  <div className="h1 m-b-md">{features.favorite.title}</div>
                  <img className="visible-xs-block visible-sm-block screen img-responsive" src="/screens/pinned.png" />
                  <div className="h3 m-t-md">Save & name your filters to return to them easily.</div>
                </div>
                <div className="hidden-xs hidden-sm col-md-push-2 col-md-4 vertical-center">
                  <img className="screen img-responsive" src="/screens/favorite.png" />
                </div>
              </div>
            </div>
          </section>

          <section className="p-y-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-8 vertical-center">
                  <div className="visible-xs-block visible-sm-block h1 text-center m-b-md">{features.colors.title}</div>
                  <img className="screen img-responsive" src="/screens/colors.png" />
                </div>
                <div className="col-md-4 text-center vertical-center">
                  <div className="hidden-xs hidden-sm h1">{features.colors.title}</div>
                  <div className="h3 m-t-md">Pick a color for each database to prevent accidental changes on production database instead of the local one.</div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-y-lg m-y-md">
            <div className="container">
              <div className="row">
                <div className="col-md-push-1 col-md-5 text-center vertical-center">
                  <div className="h1 m-b-md">{features.searchId.title}</div>
                  <img className="visible-xs-block visible-sm-block screen img-responsive" src="/screens/searchId.png" />
                  <div className="h3 m-t-md">Just paste any document _id and Dr.&nbsp;Mongo will dig it up for you.</div>
                </div>
                <div className="hidden-xs hidden-sm col-md-push-1 col-md-4 vertical-center">
                  <img className="screen img-responsive" src="/screens/searchId.png" />
                </div>
              </div>
            </div>
          </section>

          <section className="p-y-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-push-2 col-md-4 vertical-center">
                  <div className="visible-xs-block visible-sm-block h1 text-center m-b-md">{features.foreign.title}</div>
                  <img className="screen img-responsive" src="/screens/fk.png" />
                </div>
                <div className="col-md-push-2 col-md-4 text-center vertical-center">
                  <div className="hidden-xs hidden-sm h1">{features.foreign.title}</div>
                  <div className="h3 m-t-md">Click to any "id-looking" value to find the related document.</div>
                </div>
              </div>
            </div>
          </section>

        </div>

        <div className="container text-center">
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
                  <small><em>Your Dr. Mongo instance has to be running along with your other Meteor apps, so we use port&nbsp;3040, but you are free to use any port.</em></small>
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
