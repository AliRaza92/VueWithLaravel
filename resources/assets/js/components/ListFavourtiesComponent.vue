<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="panel panel-danger">
                        <div class="panel-body">
                            List of favourites
                            <span><a class="btn btn-primary pull-right" data-toggle="modal"
                                     data-target="#addFavourites">Add </a></span>
                            <table class="table">
                                <thead>
                                <th>Name</th>
                                <th>Choice</th>
                                </thead>
                                <tbody>
                                <tr v-for="favourite in listFavourites">
                                    <td>{{favourite.name}}</td>
                                    <td>{{favourite.choice}}</td>
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
            <addFavourites></addFavourites>
        </div>
    </div>
</template>
<script type="text/javascript">
    Vue.component('addFavourites', require('./Favourites/Add.vue'));
    export default {
        data(){
            return {
                listFavourites: []
            }
        },
        created(){
            axios.get('/favourites')
                .then(response => {
                    this.listFavourites = response.data;
                }).catch(error => {
                console.log('there is an error ');
            })
        }
    }
</script>

<style>

</style>