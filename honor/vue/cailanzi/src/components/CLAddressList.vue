<style lang="scss" scoped>
  
</style>

<template>
  <div class="clz-address-list">
    <clz-nav-bar leftArrowStyle='black' title="地址列表"></clz-nav-bar>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @click-item='clickItem'
    />
  </div>
</template>

<script type="text/ecmascript-6">
import { AddressList } from 'vant';
import CLNavBar from './Common/CLNavBar';

export default {
  name: "CLAddressList",
  components: {
    [AddressList.name]: AddressList,
    [CLNavBar.name]: CLNavBar,
  },
  data() {
    return {
      chosenAddressId: '4',
      list: [
        {
          id: '4',
          name: '张你大爷',
          tel: '18866778899',
          province: '山东省',
          city: '济南市',
          county: '高新区',
          addressDetail: '高新街道16号',
          areaCode: '376400',
          postalCode: '1234567',
          isDefault: false
        },
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
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
  methods: {
    onAdd() {
      this.$router.push('/address/add')
    },
    onEdit(item) {
      this.$store.commit('setEditingAddress',item)
      this.$router.push('/address/edit')
    },
    clickItem(item){
      this.$store.commit('setEditingAddress',item)
      this.$router.back()
    }
  }
}
</script>