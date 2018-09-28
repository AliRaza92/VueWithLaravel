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
                            </thead>
                            <tbody>
                            <tr v-for="country in countries">
                                <td>{{country.name}}</td>
                                <td>{{country.number}}</td>
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
    </div>
</template>
<script type="text/javascript">
    Vue.component('addCountry', require('./Country/AddCountry.vue'));
    export default{
        data(){
            return {
                countries: []
            }
        },
        methods: {},
        created(){
            axios.get('/country')
                .then((response) =>
                    this.countries = response.data
                )
                .catch((error) =>
                    console.log('error in processing')
                );
        }
    }
</script>
<style>

</style>