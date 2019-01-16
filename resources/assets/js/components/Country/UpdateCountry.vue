<template>
    <div class="modal fade" tabindex="-1" role="dialog" id="update_country_model">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">×</span></button>
                    <h4 class="modal-title">Update Post</h4>
                </div>
                <div class="modal-body">
                    <!--<div class="alert alert-danger" v-if="errors">
                        <ul>
                            <li v-for="error in errors">{{ error }}</li>
                        </ul>
                    </div>-->
                    <div class="form-group">
                        <label>Title:</label>
                        <input type="text" placeholder="Title" class="form-control"
                        >
                    </div>
                    <div class="form-group">
                        <label for="description">Description:</label>
                        <textarea cols="30" rows="5" class="form-control"
                                  placeholder="Task Description"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
</template>
<script type="text/javascript">
    export default{
        default(){
            return {
                title: '',
                description: '',
                errors: []
            }
        }
    }
</script>
<style></style>