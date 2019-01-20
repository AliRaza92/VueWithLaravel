<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-danger">
                    <div class="panel-body">
                        List of Country <span><a class="btn btn-primary pull-right" data-toggle="modal"
                                                 data-target="#addCountry">Add Country</a></span>
                        <table class="table">
                            <thead>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Action</th>
                            </thead>
                            <tbody>
                            <tr v-for="country in countries" :key="country.id">
                                <td>{{country.name}}</td>
                                <td>{{country.number}}</td>
                                <td><a type="button" @click="updateCountry()" class="btn btn-primary">Edit</a><a type="button"
                                                                                        @click.prevent="deleteCountry(country.id)"
                                                                                        class="btn btn-danger">Delete</a>
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
        <addCountry></addCountry>
        <updateCountry></updateCountry>
    </div>
</template>
<script type="text/javascript">
    Vue.component('addCountry', require('./Country/AddCountry.vue'));
    Vue.component('updateCountry', require('./Country/UpdateCountry.vue'));
    export default{
        data(){
            return {
                countries: []
            }
        },
        methods: {
            getuser(){
                axios.get('/country')
                    .then((response) =>
                        this.countries = response.data
                    )
                    .catch((error) =>
                        console.log('error in processing')
                    );
            },
            updateCountry(){
                $("#update_country_model").modal("show");
                /*this.update_post = this.posts[index];*/
            },
            deleteCountry(id){
                let conf = confirm("Are you sure you want to delete this ?");
                if (conf) {
                    axios.delete('/country/' + id)
                        .then(response => {
                            alert('record has been deleted');
                            this.reload();
                        })
                        .catch(error => {
                            alert('Something went wrong');
                        })
                }
            },
            reload(){
                this.getuser();
            }
        },
        created(){
            this.getuser();
            /*axios.get('/country')
             .then((response) =>
             this.countries = response.data
             )
             .catch((error) =>
             console.log('error in processing')
             );*/
        }
    }
</script>
<style>

</style>