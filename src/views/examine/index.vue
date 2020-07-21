<template>
<div class="exam">
        <el-row>
        <el-col :span="15" :offset="2">
            <el-row :gutter="30">
                <el-col :span="8">
                    <el-card shadow="hover">
                    <div class="inner">
                        <div>第一模块</div>
                        <ul>
                            <li>第一模块：Python从入门到放弃</li>
                            <li>第一模块：Python从入门到放弃</li>
                            <li>第一模块：Python从入门到放弃</li>
                        </ul>
                    </div>
                    </el-card>
                </el-col>
                
                <el-col :span="8">
                    <el-card shadow="hover">
                        <div class="inner">
                            第二模块<br>
                            第二模块：Python从入门到放弃
                            第二模块：Python从入门到放弃
                        </div>
                    </el-card>
                </el-col>
                
                <el-col :span="8">
                    <el-card shadow="hover">
                        <div class="inner">
                            第三模块<br>
                            第三模块：Python从入门到放弃
                            第三模块：Python从入门到放弃
                        </div>
                    </el-card>
                </el-col>
            </el-row>

        </el-col>
    </el-row>

</div>
</template>

<script>

</script>

<style scoped>
.exam{
    margin-top: 50px;
}
.inner{
    height: 120px;
}
.inner div{
    margin: auto;
    text-align: center;
}
</style>

