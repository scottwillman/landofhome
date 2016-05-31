import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import AppPublic from '../imports/pages/public/AppPublic.jsx';
import Home from '../imports/pages/public/Home.jsx';
import Collection from '../imports/pages/public/Collection.jsx';
// import { Products } from '../imports/pages/public/Products.jsx';


Meteor.startup(() => {

	render((
		<Router history={hashHistory}>
			<Route path="/" component={AppPublic}>
				<IndexRoute component={Home}/>
				<Route path="/tag/:tagName" component={Home}/>
				<Route path="/collection/:collectionId" component={Collection}/>
			</Route>
		</Router>
	), document.getElementById('app'));
});
