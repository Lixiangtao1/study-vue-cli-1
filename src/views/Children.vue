<template>
    <div class="container">
        <p>这是children页面</p>
        <h2>弹框</h2>
        <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>
        <el-dialog
          title="提示"
          :visible.sync="centerDialogVisible"
          width="30%"
          center>

          <!-- 取消和确认 -->
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
      return {
        centerDialogVisible: false
      }
    }
}
</script>