<template>
  <div>
    <a-card>
      <h2>图书列表</h2>
      <a-divider />
      <space-between>
        <div class="search">
          <a-input-search placeholder="根据书名搜索" enter-button />
        </div>
        <a-button>增加一条</a-button>
      </space-between>
      <a-divider />
      <a-table :columns="columns" :data-source="dataSource">
      </a-table> 
    </a-card>
  </div>
</template>


<script src="./index.js">

</script>




<style lang="scss" scoped>
//scoped防止组件间相互污染，不再是一个类名全局使用
@import "./index.scss";
</style>