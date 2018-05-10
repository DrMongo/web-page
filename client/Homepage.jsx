import React from 'react';

Homepage = React.createClass({


  render() {

    var title = 'Dr. Mongo';
    DocHead.setTitle(title);
    DocHead.addMeta({name: 'og:title', content: title});
    DocHead.addMeta({name: 'og:description', content: 'Open-source MongoDB admin app build on MeteorJs.'});
    DocHead.addMeta({name: 'og:image', content: 'http://drmongo.com/og-image.png'});
    DocHead.addMeta({name: 'og:url', content: 'http://drmongo.com/'});



    const installMeteorCommands = hljs.highlight('bash', '$ curl https://install.meteor.com/ | sh');
    const installDrMongoCommands = hljs.highlight('bash', `$ git clone https://github.com/DrMongo/DrMongo.git
$ cd DrMongo
$ meteor --port 3040`);
    const codeClass = 'hljs' + installMeteorCommands.language;

    const features = {
      searchId: {title: 'Search _id, everywhere'}
    };

    return (
      <div className="home">
        <div className="jumbo">
          <h2><i className="fa fa-heartbeat" /> Dr. Mongo</h2>
          <h3>Open-source MongoDB admin app built on MeteorJs <br /> with unique killer-features you will love.</h3>
          <div className="buttons m-b-md">
            <a className="btn btn-jumbo" onClick={this.handleExitClick} data-name="download" href="https://github.com/DrMongo/DrMongo/archive/master.zip"><i className="fa fa-arrow-circle-o-down" /> Download</a>
            <a className="btn btn-jumbo" onClick={this.handleExitClick} data-name="source-code" href="https://github.com/DrMongo/DrMongo"><i className="fa fa-github" /> Source</a>
          </div>
          <span className="alert alert-warning">Dr. Mongo is deprecated. Please visit our new desktop app <a href="http://www.drmingo.com/">Dr. Mingo</a>.</span>
        </div>

        <div className="container text-center">
          <section>
            <div className="h1">Browse, insert, delete or edit your documents with ease.</div>
            <img className="screen img-responsive m-t-lg m-b-md" src="/screens/main.png" />
          </section>
        </div>

        <div id="killer-features" className="m-t-lg">

          <section className="p-y-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-8 vertical-center">
                  <div className="visible-xs-block visible-sm-block h1 text-center m-b-md">2-in-1: Table & tree</div>
                  <img className="screen img-responsive" src="/screens/tree-table.png" />
                </div>
                <div className="col-md-4 text-center vertical-center">
                  <div className="hidden-xs hidden-sm h1">2-in-1: Table & tree</div>
                  <div className="h3 m-t-md">Table & tree view combined.<br />Pin the most important attributes <br />of your documents.</div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-y-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-push-2 col-md-4 vertical-center">
                  <div className="visible-xs-block visible-sm-block h1 text-center m-b-md">Favorite filters</div>
                  <img className="screen img-responsive" src="/screens/favorites.png" />
                </div>
                <div className="col-md-push-2 col-md-4 text-center vertical-center">
                  <div className="hidden-xs hidden-sm h1">Favorite filters</div>
                  <div className="h3 m-t-md">Save & name your filters <br />to return to them easily.</div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-y-lg m-y-md">
            <div className="container">
              <div className="row">
                <div className="col-md-push-1 col-md-5 text-center vertical-center">
                  <div className="h1 m-b-md">Search _id, everywhere</div>
                  <img className="visible-xs-block visible-sm-block screen img-responsive" src="/screens/search-by-id.png" />
                  <div className="h3 m-t-md">Just paste any document _id <br />and Dr.&nbsp;Mongo will dig it up for you.</div>
                </div>
                <div className="hidden-xs hidden-sm col-md-push-1 col-md-4 vertical-center">
                  <img className="screen img-responsive" src="/screens/search-by-id.png" />
                </div>
              </div>
            </div>
          </section>

          <section className="p-y-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-push-2 col-md-4 vertical-center">
                  <div className="visible-xs-block visible-sm-block h1 text-center m-b-md">Blitz search by _id</div>
                  <img className="screen img-responsive" src="/screens/blitz-id.png" />
                </div>
                <div className="col-md-push-2 col-md-4 text-center vertical-center">
                  <div className="hidden-xs hidden-sm h1">Blitz search by _id</div>
                  <div className="h3 m-t-md">Use "id-looking" searches without braces.</div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-y-lg m-y-md">
            <div className="container">
              <div className="row">
                <div className="col-md-push-1 col-md-5 text-center vertical-center">
                  <div className="h1 m-b-md">Blitz search by any attribute</div>
                  <img className="visible-xs-block visible-sm-block screen img-responsive" src="/screens/blitz-slug.png" />
                  <div className="h3 m-t-md">Set other attributes that <br />Dr.&nbsp;Mongo will use to quick-search you documents. </div>
                </div>
                <div className="hidden-xs hidden-sm col-md-push-1 col-md-4 vertical-center">
                  <img className="screen img-responsive" src="/screens/blitz-slug.png" />
                </div>
              </div>
            </div>
          </section>

          <section className="p-y-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-push-2 col-md-4 vertical-center">
                  <div className="visible-xs-block visible-sm-block h1 text-center m-b-md">Foreign _id relations</div>
                  <img className="screen img-responsive" src="/screens/foreign-id.png" />
                </div>
                <div className="col-md-push-2 col-md-4 text-center vertical-center">
                  <div className="hidden-xs hidden-sm h1">Foreign _id relations</div>
                  <div className="h3 m-t-md">Click to any "id-looking" value to find the related document.</div>
                </div>
              </div>
            </div>
          </section>
          <section className="p-y-lg m-y-md">
            <div className="container">
              <div className="row">
                <div className="col-md-push-1 col-md-5 text-center vertical-center">
                  <div className="h1 m-b-md">Dates, oh dates...</div>
                  <img className="visible-xs-block visible-sm-block screen img-responsive" src="/screens/dates.png" />
                  <div className="h3 m-t-md">Built-in human-readable dates translator <br />for faster querying.</div>
                </div>
                <div className="hidden-xs hidden-sm col-md-push-1 col-md-4 vertical-center">
                  <img className="screen img-responsive" src="/screens/dates.png" />
                </div>
              </div>
            </div>
          </section>


          <section className="p-y-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-push-2 col-md-4 vertical-center">
                  <div className="visible-xs-block visible-sm-block h1 text-center m-b-md">Multiple update & delete</div>
                  <img className="screen img-responsive" src="/screens/multi-update.png" />
                </div>
                <div className="col-md-push-2 col-md-4 text-center vertical-center">
                  <div className="hidden-xs hidden-sm h1">Multiple update & delete</div>
                  <div className="h3 m-t-md">Update or delete multiple documents.</div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-y-lg">
            <div className="container">
              <div className="row">
                <div className="col-md-8 vertical-center">
                  <div className="visible-xs-block visible-sm-block h1 text-center m-b-md">9 color themes for databases</div>
                  <img className="screen img-responsive" src="/screens/colors.png" />
                </div>
                <div className="col-md-4 text-center vertical-center">
                  <div className="hidden-xs hidden-sm h1">9 color themes for databases</div>
                  <div className="h3 m-t-md">Pick a color for each database to prevent accidental changes on production database instead of the local one.</div>
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
  },

  handleExitClick(e) {
    analytics.track("Exit Click", {
      eventName: e.currentTarget.dataset.name
    });
  }
});
