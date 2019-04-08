const app = new Vue({
    // Relacion con el di
    el: '#app',

    data: {
        titulo: 'GYM Rutine :D',
        tasks: [],
        newTask: '',

    },
    methods: {
        addTask: function () {
            this.tasks.push({
                task: this.newTask,
                state: false
            });
            console.log(this.tasks);

            localStorage.setItem('gymdb', JSON.stringify(this.tasks));

            this.newTask = '';
        },
        editTask: function (index) {
            this.tasks[index].state = !this.tasks[index].state
            localStorage.setItem('gymdb', JSON.stringify(this.tasks));
        },
        deleteTask: function(index){
            this.tasks.splice(index, 1);
            localStorage.setItem('gymdb', JSON.stringify(this.tasks));
        }
    },
    created() {
        let dbGym = JSON.parse(localStorage.getItem('gymdb'))
        if(dbGym === null){
            this.tasks = []
        } else {
            this.tasks = dbGym
        }
    },



});


