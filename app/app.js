(function() {
    angular.module('app', ['ngMaterial'])
        .config(function ($mdIconProvider, $mdThemingProvider) {
            $mdIconProvider.fontSet('i8', 'icons8');
            $mdThemingProvider.definePalette('dark-violet', {
                '50': '6b6b99',
                '100': '6b6b99',
                '200': '6b6b99',
                '300': '6b6b99',
                '400': '6b6b99',
                '500': '6b6b99',
                '600': '6b6b99',
                '700': '6b6b99',
                '800': '6b6b99',
                '900': '6b6b99',
                'A100': 'ffffff',
                'A200': 'ffffff',
                'A400': 'ffffff',
                'A700': 'ffffff',
                'contrastDefaultColor': 'dark',
                'contrastDarkColors': [],
                'contrastLightColors': []
            });
            $mdThemingProvider.definePalette('dark-grey', {
                '50': '292c33',
                '100': '292c33',
                '200': '292c33',
                '300': '292c33',
                '400': '292c33',
                '500': '292c33',
                '600': '292c33',
                '700': '292c33',
                '800': '292c33',
                '900': '292c33',
                'A100': '292c33',
                'A200': '292c33',
                'A400': '292c33',
                'A700': '292c33',
                'contrastDefaultColor': 'dark',
                'contrastDarkColors': [],
                'contrastLightColors': []
            });
            $mdThemingProvider.theme('default')
                .primaryPalette('dark-grey')
                .accentPalette('dark-violet');
        })
        .controller('AppController', function ($scope, $mdSidenav) {

        });;
})();