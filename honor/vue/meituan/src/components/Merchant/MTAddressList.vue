<style lang="scss" scoped>
  
</style>

<template>
  <div class="mt-address-list">
    <mt-nav-bar title="确认地址" left-arrow></mt-nav-bar>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script type="text/ecmascript-6">
import { AddressList } from 'vant';
import MTNavBar from "../Common/MTNavBar"
export default {
  name: "MTAddressList",
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          addressDetail: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
          areaCode: "110105",
          province: "浙江省",
          city: "杭州市",
          country: "",
          county: "西湖区",
          isDefault: false,
          name: '张三',
          tel: '13000000000'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  components: {
    [AddressList.name]: AddressList,
    [MTNavBar.name]: MTNavBar
  },
  methods: {
    onAdd(){
      this.$router.push("/address/add")
    },
    onEdit(item){
      this.$store.commit("setEditingAddress",item)
      this.$router.push("/address/edit")
    }
  }
}
</script>