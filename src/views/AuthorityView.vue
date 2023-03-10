<template>
  <div>
    <el-tree
      ref="treeRef"
      :data="list"
      show-checkbox
      node-key="roleId"
      :default-checked-keys="authority"
      :props="{
        children: 'roleList',
        label: 'name',
      }"
      :check-strictly="true"
    />
    <el-button @click="changeAuthority">确认修改</el-button>
  </div>
</template>

<script lang="ts">
import { getAuthorityList } from "@/request/api";
import { onMounted } from "vue";
import { defineComponent, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { InitData } from "@/type/authority";

export default defineComponent({
  setup() {
    const route = useRoute();
    const params: any = route.query;
    const data = reactive(new InitData(params.id, params.authority.split(",")));
    onMounted(() => {
      getAuthorityList().then((res) => {
        console.log(res);
        data.list = res.data;
      });
    });

    const changeAuthority = () => {
      console.log(
        data.treeRef.getCheckedKeys().sort((a: number, b: number) => a - b)
      );
    };

    return { ...toRefs(data), changeAuthority };
  },
});
</script>

<style scoped>
</style>