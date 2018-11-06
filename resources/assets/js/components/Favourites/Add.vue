<template>
    <div class="modal fade" id="addFavourites" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Add New Favourites</h4>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal">
                        <label>Name</label>
                        <input type="text" class="form-control" name="favourite" v-model="favourite">
                        <label>Choice</label>
                        <select name="choice" class="form-control" v-model="choice">
                            <option value="abc">abc</option>
                            <option value="def">def</option>
                        </select>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" @click="">Save Country</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        data(){
            return {
                'favourite': '',
                'choice': '',
                errors:[]
            }
        }
    }
</script>
<style></style>