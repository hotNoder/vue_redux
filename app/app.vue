<template lang="jade">
  .app
    .list
      .item(v-for='item in list',
            @dblclick='deleteItem($index)',
            @click='selectItem(item.name)',
            :class='{selected: item.name == selectId}') {{ item.name + ' 号' }}
    .btn.add(@click='addItem') +
    .btn.sum {{ list.length }}
</template>

<style>
  * {
    margin: 0;
  }
  .item {
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    border: 1px solid #ff0;
    text-align: center;
    background: #bbb;
    cursor: pointer;
  }

  .item.selected {
    background: #f00;
  }

  .btn {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #000;
  }
</style>

<script>

  import Store from './store'
  import reduxMixins from './reduxMixins'

  export default {
    name: 'app',
    mixins: [reduxMixins],
    computed: {
      list() {
        return this.state.list.list
      },
      slugId() {
        return this.state.list.slugId
      },
      selectId() {
        return this.state.project.selectId
      }
    },
    methods: {
      addItem() {
        this.actions.add({
          slugId: this.slugId
        })
      },
      deleteItem(index) {
        this.actions.delete({
          index: index
        })
      },
      selectItem(index) {
        this.actions.select({
          selectId: index
        })
      }
    }
  }
</script>