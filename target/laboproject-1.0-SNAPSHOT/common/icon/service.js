/*global angular */

angular.module('app.icon', ['ngSanitize'])

    .service('iconService', [ '$rootScope', function ($rootScope) {
        'use strict';

        function initIcons() {
            $rootScope.icon = {
                'USER': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="user-3-icon" d="M461.92,461.674H50.084c0-51.094-1.454-71.773,7.715-91.635c9.215-19.959,27.327-32.443,57.001-39.287 c74.719-17.211,74.507-23.09,65.745-39.225c-41.266-75.995-48.767-143.44-21.121-189.911c19.392-32.596,54.594-51.29,96.579-51.29 c41.669,0,76.652,18.427,95.979,50.555c33.879,56.319,10.36,132.425-20.429,190.473c-8.637,16.277-8.832,22.215,65.652,39.398 c29.673,6.844,47.785,19.328,56.999,39.287C463.343,389.832,461.92,409.938,461.92,461.674z M90.121,421.559h331.762 c0.015-36.076-2.381-44.496-33.693-51.719c-42.695-9.842-83.305-18.793-96.595-47.904c-6.652-14.57-5.132-31.184,4.521-49.379 c23.14-43.625,46.81-108.913,21.492-150.997c-12.071-20.067-33.95-31.118-61.604-31.118c-27.893,0-49.948,11.253-62.103,31.685 c-19.834,33.338-11.852,88.105,21.898,150.259c9.839,18.119,11.484,34.727,4.888,49.357c-13.301,29.5-54.105,38.25-96.87,48.098 C92.502,377.062,90.106,385.482,90.121,421.559z"/></svg>',
                'BACK': '<svg baseProfile="tiny" height="24px" version="1.2" viewBox="0 5 17 17" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_1"><path d="M17,11H9.414l2.293-2.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L5.586,12l4.707,4.707   C10.488,16.902,10.744,17,11,17s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L9.414,13H17c0.552,0,1-0.448,1-1   S17.552,11,17,11z"/></g></svg>',
                'MENU': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path id="menu-icon" d="M462,163.5H50v-65h412V163.5z M462,223.5H50v65h412V223.5z M462,348.5H50v65h412V348.5z"/></svg>',
                'CHECKMARK': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="check-mark-6-icon" d="M49.431,258l35.334-32.666c41.332,20,67.545,35.217,114,68.333 c87.334-99.109,145.041-149.39,252.307-216.128l11.498,26.447c-88.457,77.195-153.244,163.178-246.533,330.475 C158.499,366.696,120.097,323.5,49.431,258z"/></svg>',
                'ERRORMARK': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="x-mark-3-icon" d="M256,50C142.229,50,50,142.229,50,256s92.229,206,206,206s206-92.229,206-206S369.771,50,256,50z M334.124,378.545l-77.122-77.117l-77.123,77.127l-41.425-41.449l77.106-77.117l-77.115-77.11l41.448-41.424l77.103,77.092 l77.09-77.102l41.459,41.432l-77.104,77.108l77.113,77.102L334.124,378.545z"/></svg>',
                'WARNINGMARK': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="warning-3-icon" d="M256.002,50C142.23,50,50,142.229,50,256.001C50,369.771,142.23,462,256.002,462 C369.771,462,462,369.771,462,256.001C462,142.229,369.771,50,256.002,50z M256.46,398.518c-16.207,0-29.345-13.139-29.345-29.346 c0-16.205,13.138-29.342,29.345-29.342c16.205,0,29.342,13.137,29.342,29.342C285.802,385.379,272.665,398.518,256.46,398.518z M295.233,158.239c-2.481,19.78-20.7,116.08-26.723,147.724c-1.113,5.852-6.229,10.1-12.187,10.1h-0.239 c-6.169,0-11.438-4.379-12.588-10.438c-6.1-32.121-24.293-128.504-26.735-147.971c-2.94-23.441,15.354-44.171,38.977-44.171 C279.674,113.483,298.213,134.488,295.233,158.239z"/> </svg>'
            };
        }

        return {
            getIcon: function () {
                initIcons();
            }
        };
    }]);