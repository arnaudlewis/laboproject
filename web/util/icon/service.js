/*global angular */

angular.module('app.icon', ['ngSanitize'])

    .service('iconService', [ '$rootScope', function ($rootScope) {
        'use strict';

        function initIcons() {
            $rootScope.icon = {
                'USER': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="user-3-icon" d="M461.92,461.674H50.084c0-51.094-1.454-71.773,7.715-91.635c9.215-19.959,27.327-32.443,57.001-39.287 c74.719-17.211,74.507-23.09,65.745-39.225c-41.266-75.995-48.767-143.44-21.121-189.911c19.392-32.596,54.594-51.29,96.579-51.29 c41.669,0,76.652,18.427,95.979,50.555c33.879,56.319,10.36,132.425-20.429,190.473c-8.637,16.277-8.832,22.215,65.652,39.398 c29.673,6.844,47.785,19.328,56.999,39.287C463.343,389.832,461.92,409.938,461.92,461.674z M90.121,421.559h331.762 c0.015-36.076-2.381-44.496-33.693-51.719c-42.695-9.842-83.305-18.793-96.595-47.904c-6.652-14.57-5.132-31.184,4.521-49.379 c23.14-43.625,46.81-108.913,21.492-150.997c-12.071-20.067-33.95-31.118-61.604-31.118c-27.893,0-49.948,11.253-62.103,31.685 c-19.834,33.338-11.852,88.105,21.898,150.259c9.839,18.119,11.484,34.727,4.888,49.357c-13.301,29.5-54.105,38.25-96.87,48.098 C92.502,377.062,90.106,385.482,90.121,421.559z"/></svg>',
                'BACK': '<svg baseProfile="tiny" height="24px" version="1.2" viewBox="3 5 17 17" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Layer_1"><path d="M17,11H9.414l2.293-2.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L5.586,12l4.707,4.707   C10.488,16.902,10.744,17,11,17s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L9.414,13H17c0.552,0,1-0.448,1-1   S17.552,11,17,11z"/></g></svg>',
                'MENU': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path id="menu-icon" d="M462,163.5H50v-65h412V163.5z M462,223.5H50v65h412V223.5z M462,348.5H50v65h412V348.5z"/></svg>',
                'CHECKMARK': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="check-mark-6-icon" d="M49.431,258l35.334-32.666c41.332,20,67.545,35.217,114,68.333 c87.334-99.109,145.041-149.39,252.307-216.128l11.498,26.447c-88.457,77.195-153.244,163.178-246.533,330.475 C158.499,366.696,120.097,323.5,49.431,258z"/></svg>',
                'ERRORMARK': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="x-mark-3-icon" d="M256,50C142.229,50,50,142.229,50,256s92.229,206,206,206s206-92.229,206-206S369.771,50,256,50z M334.124,378.545l-77.122-77.117l-77.123,77.127l-41.425-41.449l77.106-77.117l-77.115-77.11l41.448-41.424l77.103,77.092 l77.09-77.102l41.459,41.432l-77.104,77.108l77.113,77.102L334.124,378.545z"/></svg>',
                'WARNINGMARK': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="warning-3-icon" d="M256.002,50C142.23,50,50,142.229,50,256.001C50,369.771,142.23,462,256.002,462 C369.771,462,462,369.771,462,256.001C462,142.229,369.771,50,256.002,50z M256.46,398.518c-16.207,0-29.345-13.139-29.345-29.346 c0-16.205,13.138-29.342,29.345-29.342c16.205,0,29.342,13.137,29.342,29.342C285.802,385.379,272.665,398.518,256.46,398.518z M295.233,158.239c-2.481,19.78-20.7,116.08-26.723,147.724c-1.113,5.852-6.229,10.1-12.187,10.1h-0.239 c-6.169,0-11.438-4.379-12.588-10.438c-6.1-32.121-24.293-128.504-26.735-147.971c-2.94-23.441,15.354-44.171,38.977-44.171 C279.674,113.483,298.213,134.488,295.233,158.239z"/> </svg>',
                'MAGNIFIER': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="magnifier-4-icon" d="M448.225,394.243l-85.387-85.385c16.55-26.081,26.146-56.986,26.146-90.094 c0-92.989-75.652-168.641-168.643-168.641c-92.989,0-168.641,75.652-168.641,168.641s75.651,168.641,168.641,168.641 c31.465,0,60.939-8.67,86.175-23.735l86.14,86.142C429.411,486.566,485.011,431.029,448.225,394.243z M103.992,218.764 c0-64.156,52.192-116.352,116.35-116.352s116.353,52.195,116.353,116.352s-52.195,116.352-116.353,116.352 S103.992,282.92,103.992,218.764z M138.455,188.504c34.057-78.9,148.668-69.752,170.248,12.862 C265.221,150.329,188.719,144.834,138.455,188.504z"/> </svg>',
                'PROFILE': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <path id="id-card-icon" d="M256.868,316.465c-34.166-7.885-65.97-14.783-50.569-43.82 c46.886-88.391,12.428-135.662-37.078-135.662c-50.484,0-84.091,49.085-37.081,135.662c15.864,29.213-17.134,36.105-50.568,43.82 c-34.151,7.875-31.524,25.879-31.524,58.553h238.347C288.394,342.344,291.019,324.34,256.868,316.465z M462,141.051H300.943v48.97 H462V141.051z M462,233.549H300.943v48.971H462V233.549z M462,326.047H356.443v48.971H462V326.047z"/> </svg>',
                'PAPYRUS': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <path id="script-5-icon" d="M400.98,206.864c-17.312,23.487-42.98,46.662-71.904,42.879 c-7.836,10.922-16.562,26.158-26.268,43.86l-22.424,7.026c18.977-36.97,44.328-77.861,71.52-108.927 c-11.775,7.655-31.125,24.123-47.955,41.483c-15.186-31.66,0.818-60.985,24.023-83.379c-0.664,10.546,4.029,20.172,7.537,25.12 c-0.594-8.823,0.432-24.579,6.869-38.243c12.926-10.882,24.354-18.715,37.414-25.571c-2.121,7.717-0.314,16.964,2.172,22.734 c1.127-7.993,5.891-23.095,11.391-29.356c16.291-10.5,40.408-18.888,66.148-18.459c-2.848,15.83-11.162,41.539-22.414,57.49 c-9.078,5.823-21.082,9.238-30.645,10.872c7.922,2.221,16.799,2.871,24.508,2.299c-5.605,11.762-11.307,22.548-19.922,35.765 c-11.875,6.623-27.051,9.54-37.432,10.092C380.855,206.344,394.084,208.562,400.98,206.864z M363.352,350.531 c-0.738,0.484-163.183,102.967-163.183,102.967l-0.018-0.027c-25.313,15.086-55.45,9.07-74.02-9.498 c-26.845-26.846-22.159-72.343,10.214-93.331l18.57,23.845c-28.159,14.992-17.245,57.496,14.3,57.496 c25.081,0,39.478-28.771,24.396-48.828c0,0-100.99-129.154-126.172-160.816c-26.242-32.995-16.758-77.227,19.339-94.523 l142.465-72.917l0.022,0.044c26.344-11.71,57.906-2.109,72.928,23.509c14.613,24.928,8.52,57.563-15.525,75.312l-140.83,79.578 l-18.603-23.969c28.136-15.033,17.167-57.478-14.339-57.478c-21.359,0-42.345,25.755-21.865,51.948 c24.579,31.436,124.495,158.655,124.495,158.655c8.988,10.672,13.737,23.686,14.176,36.916c0,0,99.769-62.884,115.138-72.74 c15.863-10.173,18.797-29.412,7.135-42.976c-0.045-0.052-2.879-3.528-7.438-9.121c10.309-1.273,20.5-4.685,30.447-10.149 C400.602,295.801,388.793,333.849,363.352,350.531z M145.506,131.449c17.389,11.146,28.407,30.66,27.891,52.463l92.795-52.56 c14.521-8.322,16.873-24.787,10.576-36.839c-7.301-13.976-23.486-17.664-35.743-11.954L145.506,131.449z M248.381,310.319 c4.459-8.804,12.146-24.093,19.613-38.333l-62.074,36.371l13.715,18.805L248.381,310.319z M177.213,270.481l13.715,18.806 l90.592-53.08l-14.277-18.475L177.213,270.481z"/> </svg>',
                'SPEEDOMETER': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="dashboard-5-icon" d="M393.702,260.194c-2.425-7.329-5.401-14.488-8.863-21.32l-42.122,18.99 c3.721,6.752,6.697,13.905,8.87,21.316L393.702,260.194z M177.864,244.682c4.654-6.067,9.948-11.58,15.771-16.429l-32.441-33.791 c-5.636,5.04-10.932,10.555-15.771,16.428L177.864,244.682z M207.291,218.688c6.513-3.792,13.414-6.808,20.566-8.989l-17.744-44.088 c-7.045,2.433-13.949,5.453-20.565,8.992L207.291,218.688z M159.935,280.747c2.064-7.466,4.931-14.667,8.542-21.464l-42.396-18.298 c-3.373,6.915-6.242,14.118-8.549,21.46L159.935,280.747z M321.896,174.324c-6.64-3.516-13.556-6.506-20.599-8.908l-17.575,44.166 c7.163,2.151,14.076,5.138,20.602,8.9L321.896,174.324z M366.537,210.89c-4.837-5.873-10.134-11.388-15.771-16.428l-32.44,33.791 c5.824,4.849,11.116,10.361,15.771,16.429L366.537,210.89z M267.133,158.372c-3.763-0.299-7.506-0.449-11.152-0.449 c-3.646,0-7.39,0.15-11.151,0.449v47.785c3.702-0.43,7.443-0.646,11.151-0.646s7.45,0.216,11.152,0.646V158.372z M256,394.961 c-22.214,0-40.223-18.01-40.223-40.224c0-15.16,8.391-28.356,20.778-35.213L256,228.389l19.444,91.136 c12.388,6.856,20.779,20.053,20.779,35.213C296.224,376.951,278.214,394.961,256,394.961z M77.64,404.487 C60.07,374.175,50,338.998,50,301.512c0-113.589,92.411-206,206-206s206,92.411,206,206c0,37.486-10.07,72.663-27.64,102.977 l-34.734-20.054c14.147-24.41,22.257-52.737,22.257-82.923c0-91.469-74.414-165.884-165.883-165.884S90.117,210.043,90.117,301.512 c0,30.186,8.109,58.513,22.257,82.923L77.64,404.487z"/> </svg>',
                'EXIT': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="logout-3-icon" d="M220.224,383.606v-84.045h149.859v-41.746L454,341.585l-83.917,83.77v-41.748H220.224z M280.512,269.562 h40V86.646H58v300l110.445-84.912V126.646h112.066V269.562z"/> </svg>',
                'FEMALE': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <path id="female-icon" d="M406,196c0-82.843-67.157-150-150-150s-150,67.157-150,150c0,73.622,53.046,134.845,123,147.562v30.771 h-58v50h58V466h1h52h1v-41.667h58v-50h-58v-30.771C352.954,330.845,406,269.622,406,196z M156,196c0-55.14,44.859-100,100-100 s100,44.86,100,100s-44.859,100-100,100S156,251.14,156,196z"/></svg>',
                'MALE': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <path id="male-icon" d="M305.5,56v50h62.109l-76.283,76.283C267.198,165.708,237.985,156,206.5,156c-82.843,0-150,67.157-150,150 c0,82.843,67.157,150,150,150s150-67.157,150-150c0-31.485-9.708-60.698-26.283-84.826l75.283-75.283V206h50V56H305.5z M206.5,406 c-55.14,0-100-44.859-100-100c0-55.14,44.86-100,100-100c55.141,0,100,44.86,100,100C306.5,361.141,261.641,406,206.5,406z"/></svg>',
                'FLAG_END': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="flag-19-icon" d="M253.762,355.169c-10.604-4.327-22.65-7.633-35.452-9.945v30.412 c25.838,5.235,45.196,14.396,45.583,24.308c-0.599,15.321-46.519,28.854-91.651,28.854c-45.188,0-91.145-13.53-91.709-28.854 c0.364-9.882,19.607-19.016,45.349-24.259v-30.409c-12.691,2.31-24.636,5.599-35.162,9.894C55.291,369.622,50,389.427,50,399.943 c0,10.519,5.291,30.322,40.719,44.776c45.562,18.589,117.513,18.575,163.043,0c35.429-14.454,40.719-34.258,40.719-44.776 C294.48,389.427,289.19,369.622,253.762,355.169z M191.682,403.887h-39.239V53.344h39.239V403.887z M404.718,101.319 c-51.28,0-52.434-44.177-111.966-44.177c-32.188,0-62.201,14.954-74.91,25.85c0,1.357,0,61.409,0,83.297 c22.889-21.095,75.969-33.509,117.646-5.765V99.626c12.111,9.107,44.538,40.137,100.351,23.09v56.034 c-26.739,24.359-86.253,2.123-100.351-18.226v62.737c-37.035-14.709-85.155-7.241-117.646,14.557c0,17.727,0,29.601,0,29.601 c18.04-12.504,45.455-25.646,75.116-25.646c56.224,0,64.104,42.021,114.218,42.021c32.366,0,54.824-20.734,54.824-20.734V79.504 C462,79.504,437.258,101.319,404.718,101.319z"/> </svg>',
                'FLAG_START': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="flag-18-icon" d="M253.765,355.17c-10.604-4.327-22.65-7.633-35.453-9.945v30.413 c25.839,5.235,45.197,14.396,45.584,24.308c-0.599,15.321-46.52,28.854-91.652,28.854c-45.189,0-91.146-13.53-91.711-28.854 c0.364-9.882,19.608-19.016,45.35-24.259v-30.41c-12.691,2.31-24.636,5.599-35.162,9.894C55.291,369.624,50,389.429,50,399.945 c0,10.519,5.291,30.323,40.72,44.777c45.562,18.589,117.514,18.575,163.045,0c35.429-14.454,40.72-34.259,40.72-44.777 C294.484,389.429,289.193,369.624,253.765,355.17z M191.683,403.882h-39.239V53.341h39.239V403.882z M462,79.501 c0,0-24.741,21.817-57.281,21.817c-51.281,0-52.435-44.179-111.965-44.179c-32.188,0-62.201,14.955-74.911,25.851 c0,10.753,0,184.425,0,184.425c18.041-12.503,45.456-25.647,75.115-25.647c56.223,0,64.104,42.021,114.219,42.021 c32.367,0,54.823-20.732,54.823-20.732V79.501z"/> </svg>',
                'PRICE': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path id="credit-card-4-icon" d="M432,128.5H80c-16.568,0-30,13.432-30,30v195c0,16.568,13.432,30,30,30h352 c16.568,0,30-13.432,30-30v-195C462,141.932,448.568,128.5,432,128.5z M432,343.5c0,5.522-4.478,10-10,10H90 c-5.522,0-10-4.478-10-10v-175c0-5.523,4.478-10,10-10h332c5.522,0,10,4.477,10,10V343.5z M162.668,308H110v19h52.668V308z M243.668,308H191v19h52.668V308z M324.168,308H271.5v19h52.668V308z M404.668,308H352v19h52.668V308z M325.571,234.667 c0,22.201-17.998,40.2-40.199,40.2c-22.203,0-40.199-17.999-40.199-40.2c0-22.202,17.996-40.201,40.199-40.201 C307.573,194.466,325.571,212.465,325.571,234.667z M236.07,234.667c0-13.242,5.258-25.271,13.781-34.137 c-6.161-3.839-13.432-6.064-21.224-6.064c-22.203,0-40.199,17.999-40.199,40.201c0,22.201,17.996,40.2,40.199,40.2 c7.792,0,15.062-2.225,21.224-6.064C241.328,259.937,236.07,247.909,236.07,234.667z"/></svg>',
                'PASSENGERS': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="-60 -135 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="user-14-icon" d="M461.968,359.358h-79.937c-0.004-86.998-43.49-45.648-43.49-121.885c0-27.52,18.017-42.455,41.15-42.455 c34.181,0,57.969,32.635,25.601,93.66c-10.634,20.049,11.323,24.812,34.912,30.254C463.782,324.37,461.968,336.802,461.968,359.358z M71.796,318.933c23.589-5.441,45.546-10.205,34.912-30.254c-32.368-61.025-8.58-93.66,25.601-93.66 c23.134,0,41.15,14.936,41.15,42.455c0,76.236-43.486,34.887-43.49,121.885H50.032C50.032,336.802,48.218,324.37,71.796,318.933z M332.115,308.509c-29.67-6.846-57.289-12.838-43.913-38.055c40.715-76.762,10.792-117.812-32.202-117.812 c-43.842,0-73.027,42.625-32.201,117.812c13.776,25.371-14.883,31.357-43.915,38.055c-29.658,6.84-27.377,22.477-27.377,50.85 h206.985C359.492,330.985,361.774,315.349,332.115,308.509z"/> </svg>',
                'CALENDAR': '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"> <path id="calendar-5-icon" d="M197.453,295.951h-58.905v-58.904h58.905V295.951z M286.452,237.047h-58.904v58.904h58.904V237.047z M375.452,237.047h-58.905v58.904h58.905V237.047z M197.453,323.047h-58.905v58.906h58.905V323.047z M286.452,323.047h-58.904 v58.906h58.904V323.047z M375.451,323.047h-58.904v58.906h58.904V323.047z M397.389,118.131c0,10.035-8.135,18.171-18.17,18.171 s-18.171-8.136-18.171-18.171V72.402c0-10.034,8.136-18.17,18.171-18.17s18.17,8.136,18.17,18.17V118.131z M151.889,72.32 c0-10.035-8.136-18.171-18.17-18.171c-10.036,0-18.171,8.136-18.171,18.171v45.728c0,10.035,8.135,18.171,18.171,18.171 c10.034,0,18.17-8.136,18.17-18.171V72.32z M419.352,98.851v18.616c0,22.13-18.004,40.134-40.133,40.134 c-22.13,0-40.134-18.004-40.134-40.134V98.851H173.852v18.533c0,22.13-18.004,40.134-40.133,40.134 c-22.13,0-40.134-18.004-40.134-40.134V98.851H50v359h412v-359H419.352z M422,417.851H90V195.38h332V417.851z"/></svg>'
            };
        }

        return {
            getIcon: function () {
                initIcons();
            }
        };
    }]);