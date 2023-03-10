<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <!-- @click="onSubmit" -->
        <el-button type="primary" @click="addRole">添加角色</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="roleId" label="ID" width="180" />
      <el-table-column prop="roleName" label="角色名" width="180" />
      <el-table-column prop="authority" label="操作">
        <template #default="scope">
          <el-button link size="small" @click="changeRole(scope.row)">
            修改权限
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { getRoleList } from "@/request/api";
import { InitData, ListInt } from "@/type/role";
import { ElMessage, ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
import "element-plus/theme-chalk/el-loading.css";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-notification.css";
import "element-plus/theme-chalk/el-message-box.css";
import "element-plus/theme-chalk/el-drawer.css";

export default defineComponent({
  setup() {
    const data = reactive(new InitData());
    const router = useRouter();
    onMounted(() => {
      getRoleList().then((res) => {
        data.list = res.data;
      });
    });

    const addRole = () => {
      ElMessageBox.prompt("请输入角色名称", "添加", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          // value表示在输入框中填写的值
          if (value) {
            data.list.push({
              roleId: data.list.length + 1,
              roleName: value,
              authority: [],
            });
          }
          ElMessage({
            type: "success",
            message: `${value}角色添加成功`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "取消操作",
          });
        });
    };

    const changeRole = (row: ListInt) => {
      router.push({
        path: "/authority",
        query: {
          id: row.roleId,
          authority: row.authority.join(","),
        },
      });
    };
    return { ...toRefs(data), changeRole, addRole };
  },
});
</script>

<style scoped>
</style>