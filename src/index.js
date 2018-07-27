define([
    'vue',
    './filters/lower',
    './filters/upper',
    './widgets/stx-grid/stx-grid',
    '../style.scss'
], function(Vue) {
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = '<stx-grid :columns="grid.columns" :values="grid.values" />';

    var vm = new Vue({
        el: '#app',
        data: {
            grid: {
                columns: [
                    {
                        name: 'Name',
                        field: 'name'
                    },
                    {
                        name: 'Age',
                        field: 'age'
                    }
                ],
                values: [
                    { name: 'Sergio', age: 34 },
                    { name: 'Pedro', age: 55 },
                    { name: 'Roberto', age: 18 },
                    { name: 'Enzo', age: 10 }
                ]
            }
        }
    });

    return vm;
});
