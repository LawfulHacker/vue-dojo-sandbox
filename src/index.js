define(['vue', './sample-form'], function(Vue) {
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = '<sample-form />';

    var vm = new Vue({
        el: '#app',
        data: {
            firstName: '',
            lastName: ''
        }
    });

    return vm;
});
