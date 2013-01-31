"use strict";

define(["jquery",
        "jquery-ui",
        "jquery.fancypants.js",
       ],
       function () {

            $(function() {
                  $.fancypants({
                                   source: 'js/',
                               });

                  var enableFp = function() {
                      $('#fp-enable').replaceWith($('<button id="fp-disable">').text('Disable Fancypants'));
                      $('#fp-disable').click(disableFp);
                      if(!$.fancypants('isOn')) $.fancypants('on');
                  };

                  var disableFp = function() {
                      $('#fp-disable').replaceWith($('<button id="fp-enable">').text('Enable Fancypants'));
                      $('#fp-enable').click(enableFp);
                      if($.fancypants('isOn')) $.fancypants('off');
                  };

                  disableFp();
              });

        });
