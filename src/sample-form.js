define(['vue', 'dojo/text!./sample-form.html'], function(Vue, template) {
    console.log(template);

    Vue.component('sample-form', {
        template: template,
        props: {
            firstName: {
                type: String,
                'default': ''
            },
            lastName: {
                type: String,
                'default': ''
            }
        },
        data: function() {
            return {};
        },
        methods: {
            updateValue: function(value) {
                this.$emit('change', value);
            }
        }
    });
});
