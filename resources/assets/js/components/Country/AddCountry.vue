<template>
    <div class="modal fade" id="addCountry" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" @click="ClearModal" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Add New Country</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <label>Country Name</label>
                        <input type="text" class="form-control" name="countryName" v-model="countryName">
                        <ul v-if="errors">
                            <li v-for="err in errors.countryName" class="alert alert-danger">{{err}}</li>
                        </ul>
                        <label>Country ShortCode</label>
                        <input type="text" name="CountryShortCode" class="form-control" v-model="CountryShortCode">
                        <ul v-if="errors">
                            <li v-for="err in errors.CountryShortCode" class="alert alert-danger">{{err}}</li>
                        </ul>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" @click="saveCountry">Save Country</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return {
                'countryName': '',
                'CountryShortCode': '',
                 errors: []
            }
        },
        methods: {
            saveCountry(){
                axios.post('/country', {
                    'countryName': this.countryName,
                    'CountryShortCode': this.CountryShortCode
                }).then(data => {
                    this.countryName = '';
                    this.CountryShortCode = '';
                    
                }).catch(error => {
                    this.errors = error.response.data.errors;
                });
            },
            ClearModal(e){
               this.errors=[];
               e.preventDefault();

            }
        }

    }
</script>
<style>

</style>