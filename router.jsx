FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {content: <Homepage />});
  }
});


if(Meteor.isServer) {
  var timeInMillis = 1000 * 60 * 60; // 60 minutes
  FlowRouter.setPageCacheTimeout(timeInMillis)
}
