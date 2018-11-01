<template>
    <div class="modal fade" id="addCountry" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Add New Country</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <label>Country Name</label>
                        <input type="text" class="form-control" name="countryName" v-model="countryName">
                        <label>Country ShortCode</label>
                        <input type="text" name="CountryShortCode" class="form-control" v-model="CountryShortCode">
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
                'countryName': 'Name',
                'CountryShortCode': 'Short code',
                errors:[]
            }
        },
        methods: {
            saveCountry(){
                axios.post('/country', {
                    'countryName': this.countryName,
                    'CountryShortCode': this.CountryShortCode
                }).then(data => {
                    alert('data inserted');
                    this.countryName = '';
                    this.CountryShortCode = '';
                }).catch(error => {
                    this.error = error.response.data.errors;
                    alert(this.error);
                    console.log(this.error);
                });
            }
        }

    }
</script>
<style>

</style>