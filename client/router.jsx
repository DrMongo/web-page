import React from 'react';
import {mount} from 'react-mounter';

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {content: <Homepage />});
  }
});
