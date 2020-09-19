<style lang="scss" scoped>
  
</style>

<template>
  <div class="clz-address-edit">
    <clz-nav-bar leftArrowStyle='black' title="编辑地址"></clz-nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      :address-info="addressInfo"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import { AddressEdit } from 'vant';
import areaList from '../data/area';
import CLNavBar from './Common/CLNavBar';

export default {
  name: "CLAddressEdit",
  data() {
    return {
      areaList,
      addressInfo: {}
    }
  },
  components: {
    [AddressEdit.name]: AddressEdit,
    [CLNavBar.name]: CLNavBar,
  },
  methods: {
    onSave(content) {
      this.$store.state.editingAddress = content
      this.$router.back()
    },
    onDelete() {
      console.log('delete');
    }
  },
  computed: {
    isEditing(){
      if(this.$route.name == 'address_edit'){
        return true
      } else {
        return false
      }
    }
  },
  mounted(){
    if(this.isEditing){
      this.addressInfo = this.$store.state.editingAddress
    }
  }
}
</script>