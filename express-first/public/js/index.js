import '../css/index.css';


import angular from 'angular';
import angularUiRouter from 'angular-ui-router'; 

import '../views/index.html';
import router from './router/router.js';

import hello from './dircetive/hello.js';

import one from './utils/test.js';

import ngInfiniteScroll from 'ng-infinite-scroll';

// services
import randoms from './services/random.service.js';


// controller
import oneController from './controller/oneController.js';


const app=angular.module('app',[angularUiRouter,randoms]);
 
 import helloController from './controller/helloController.js';
helloController(app);

oneController(app);

hello(app);
  
router(app);     



/**
 * onclick="document.getElementById('showscroll').scrollIntoView();"
 *
 * scrollIntoView()相当于锚点跳转
 */