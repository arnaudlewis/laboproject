/*global angular */

angular.module('app.icon', ['ngSanitize'])

    .service('iconService', [ '$rootScope', function ($rootScope) {
        'use strict';

        function initIcons() {
            $rootScope.icon = {
                'USER': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="user-3-icon" d="M461.92,461.674H50.084c0-51.094-1.454-71.773,7.715-91.635c9.215-19.959,27.327-32.443,57.001-39.287 c74.719-17.211,74.507-23.09,65.745-39.225c-41.266-75.995-48.767-143.44-21.121-189.911c19.392-32.596,54.594-51.29,96.579-51.29 c41.669,0,76.652,18.427,95.979,50.555c33.879,56.319,10.36,132.425-20.429,190.473c-8.637,16.277-8.832,22.215,65.652,39.398 c29.673,6.844,47.785,19.328,56.999,39.287C463.343,389.832,461.92,409.938,461.92,461.674z M90.121,421.559h331.762 c0.015-36.076-2.381-44.496-33.693-51.719c-42.695-9.842-83.305-18.793-96.595-47.904c-6.652-14.57-5.132-31.184,4.521-49.379 c23.14-43.625,46.81-108.913,21.492-150.997c-12.071-20.067-33.95-31.118-61.604-31.118c-27.893,0-49.948,11.253-62.103,31.685 c-19.834,33.338-11.852,88.105,21.898,150.259c9.839,18.119,11.484,34.727,4.888,49.357c-13.301,29.5-54.105,38.25-96.87,48.098 C92.502,377.062,90.106,385.482,90.121,421.559z"/></svg>',
                'BACK': '<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 5 17 17" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_1"><path d="M17,11H9.414l2.293-2.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L5.586,12l4.707,4.707   C10.488,16.902,10.744,17,11,17s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L9.414,13H17c0.552,0,1-0.448,1-1   S17.552,11,17,11z"/></g></svg>',
                'MENU': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path id="menu-icon" d="M462,163.5H50v-65h412V163.5z M462,223.5H50v65h412V223.5z M462,348.5H50v65h412V348.5z"/></svg>'

            };
        }

        return {
            getIcon: function () {
                initIcons();
            }
        };
    }]);