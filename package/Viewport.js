(function($window) {

    $window.viewport = {

        /**
         * @method analyse
         * @param element {Object}
         * @return {Object}
         */
        analyse: function analyse(element) {

            // Initialise the variables.
            var yAxis = 0, xAxis = 0;

            if (element.offsetTop < 0) {

                // Deduct the `offsetTop` if it's less than zero.
                yAxis += element.offsetTop;

            }

            if (element.offsetLeft < 0) {

                // Deduct the `offsetLeft` if it's less than zero.
                xAxis += element.offsetLeft;

            }

            return { y: yAxis, x: xAxis };

        }

    };

})(window);