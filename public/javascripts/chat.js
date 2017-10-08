var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {
    $scope.messages=[
    {
    'sender':'USER',
    'text':"hi",
    'time':'10:01 AM'
    },
    {
        'sender':'BOT',
        'text':"what can i do for you?",
        'time':'10:02 AM'
        },
        {
            'sender':'USER',
            'text':"News about north korea",
            'time':'10:03 AM'
            }
    ]
});
