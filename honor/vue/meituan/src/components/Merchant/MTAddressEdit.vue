<style lang="scss" scoped>
  
</style>

<template>
  <div class="mt-address-edit">
    <mt-nav-bar title="编辑地址" left-arrow></mt-nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :address-info="addressInfo"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import { AddressEdit } from 'vant';
import areaList from "../../data/area";
import MTNavBar from "../Common/MTNavBar";
export default {
  name: "MTAddressEdit",
  data() {
    return {
      areaList,
      addressInfo: {}
    }
  },
  computed: {
    isEditing(){
      if (this.$route.name == 'address_edit') {
        return true
      } else {
        return false
      }
    }
  },
  mounted(){
    if (this.isEditing) {
      this.addressInfo = this.$store.state.editingAddress
    }
  },
  components: {
    [AddressEdit.name]: AddressEdit,
    [MTNavBar.name]: MTNavBar,
  },
  methods: {
    onSave(content){
      window.console.log(content)
    },
    onDelete(){

    }
  }
}
</script>