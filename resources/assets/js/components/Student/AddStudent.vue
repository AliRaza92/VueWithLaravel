<template>
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Add New Student</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <label>Name</label>
                        <input type="text" class="form-control" name="name" v-model="name">
                        <label>Address</label>
                        <textarea name="address" class="form-control" v-model="address"></textarea>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" @click="saveStudent">Save</button>
                </div>
            </div>

        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
        data(){
            return {
                name: 'type your name',
                address: 'type your address'
            }
        },
        methods: {
            saveStudent(){
                axios.post('/student', {
                    'name': this.name,
                    'address': this.address
                }).then(data => {
                    this.$emit('recordSave', data);
                    this.name = '';
                    this.address = '';
                })
                    .catch(error => {
                        console.log('there is an error');
                    });
            }
        }
    }
</script>
<style></style>