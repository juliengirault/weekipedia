import React from 'react'
import Home from './pages/Home'
import Page from './pages/Page'
import api from './api.js'

function matchRoute( path ) {
  var chosenRoute;
  var routes = [
    // Home page / Hot
    [
      /^\/?$|\/hot\/(.*)$/,
      function( info ) {
        var filter = info[1] || '';
        return {
          children: [
            React.createElement(Home, {
              title: filter ? 'Hot (' + filter + ')' : 'Hot',
              key: 'home-' + filter,
              api: api
            })
          ]
        }
      }
    ],
    // View a page
    [
      /^\/([a-z]*)\/wiki\/(.*)|^\/wiki\/(.*)/,
      function ( info ) {
        var title = info[2] || info[3];
        return {
          children: [
            React.createElement(Page, {
              key: 'page-' + title,
              api: api,
              lang: info[1] || 'en',
              title: title
            })
          ]
        }
      }
    ],
    // 404
    [
      /(.*)/,
      function ( info ) {
        return {
          title: '404 - Page Not Found',
          children: React.DOM.p({},'The path ' + info[1] + ' is not the path you are looking for.')
        }
      }
    ]
  ];

  routes.some( function ( route ) {
    var res = path.match( route[0] );
    if ( res ) {
      chosenRoute = route[1](res);
      return true;
    }
  } );
  return chosenRoute;
}

export default matchRoute
