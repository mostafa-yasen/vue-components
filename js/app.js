$(function() {
    var vm = new Vue({
        el: "#app",
        data: {
            title: "Index"
        },
        method: {
            sayHi: function () {
                console.lig('Hi');
            }
        },
        computed: {
            get_title: function () {
                return `title is: ${this.title}`;
            }
        },
        watch: {
            title: function(new_value) {
                console.log(`title changed to ${new_value}.`);
            }
        }
    });
});