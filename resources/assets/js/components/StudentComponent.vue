<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-danger">
                    <div class="panel-heading">This is student Component<span class="pull-right"><a
                            class="btn btn-primary btn-xs" data-toggle="modal" data-target="#myModal">+</a></span></div>
                    <div class="panel-body">
                        List of Student
                        <table class="table">
                            <thead>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                            </thead>
                            <tbody>
                            <tr v-for="student in students">
                                <td>{{student.name}}</td>
                                <td>{{student.address}}</td>
                                <td>
                                    <button class="btn btn-primary btn-xs">Add</button>
                                    |
                                    <button
                                            class="btn btn-danger btn-xs">Delete
                                    </button>
                                    |
                                    <button
                                            class="btn btn-success btn-xs">Preview
                                    </button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="panel-footer text-right">
                        <small>CopyRights &copy; 2018</small>
                    </div>
                </div>
            </div>
        </div>
        <div id="modal">
            <addStudent></addStudent>
        </div>
    </div>
</template>

<script type="text/javascript">
    Vue.component('addStudent', require('./Student/AddStudent.vue'));
    export default {
        data(){
            return {
                students: []
            }
        },
        methods: {
            showMessage: function () {
                alert('asdasddasd');
            }
        },
        created(){
            axios.get('/student')
                .then((response) => this.students = response.data)
                .catch((error) => console.log(error));
        }
    }
</script>

<style>

</style>