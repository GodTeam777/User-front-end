<template>
    <div style="width: 100%;height: 100%;border: red solid 0px">
        车辆信息认证
        <hr style="width: 100%;margin-top: 1%">
        <div style="margin:0 auto;width: 80%;height: 93%;">
            <table style="margin-left: 12%;width: 60%;height: 80%;"border="0">
                <tr>
                    <td style="text-align: right">车辆品牌：</td>
                    <td><el-input :disabled="isDiabl" v-model="carbrand" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                    <td style="text-align: right">车牌号：</td>
                    <td><el-input :disabled="isDiabl" v-model="carid" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                    <td style="text-align: right">登记地：</td>
                    <td><el-input :disabled="isDiabl" v-model="caraddress" placeholder="请输入内容"></el-input></td>
                </tr>
                <tr>
                    <td style="text-align: right">车辆照：</td>
                    <td>
                        <el-upload :disabled="isDiabl" style="width: 54%;"
                                   class="avatar-uploader"
                                   action="https://jsonplaceholder.typicode.com/posts/"
                                   :show-file-list="false"

                                   ref="upload"
                                   :on-change="handleAvatarSuccess"
                                   :http-request="uploadFile"

                                   v-loading="loading">
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><el-button :disabled="isDiabl" style="margin-left:25%" @click="OnSubmit">提交</el-button></td>
                </tr>
            </table>
            <div v-show="isShow" style="text-align: center;font-size: 9%;color: rgba(180,173,163,0.85);border-radius:7px 7px 7px 7px;width: 10%;height: 10%;margin-left:80%;margin-top: -53%;box-shadow:#F8F8FF 2px 2px 5px 5px;">
                <br> 验证状态:<br><font v-show="status0" color="#909399">{{this.status0}}</font><font v-show="status1" color="#F56C6C">{{this.status1}}</font><font v-show="status2" color="#67C23A">{{this.status2}}</font>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "attestation_car",
        data(){
            return{
                formDate:'',

                status0:"",
                status1:"",
                status2:"",

                carbrand:"",
                carid:"",
                caraddress:"",
                imageUrl:"",

                isShow:false,
                loading:false,
                isDiabl:false
            }
        },
        mounted() {

            this.axios({
                url:"http://localhost:10086/select_att_car",
                method:"POST",
                withCredentials: true,
            }).then(res=>{
                if(res.data!=""&&res.data!=null){
                    if(res.data.status==0){
                        this.isDiabl=true;
                        this.isShow=true
                        this.status0="待审核"

                        this.carbrand=res.data.carbrand;
                        this.carid=res.data.carid;
                        this.caraddress=res.data.caraddress
                        this.imageUrl=res.data.cpath

                    }else if(res.data.status==1){
                        this.status1="未通过"
                        this.isShow=true
                        this.carbrand=res.data.carbrand;
                        this.carid=res.data.carid;
                        this.caraddress=res.data.caraddress
                        this.imageUrl=res.data.cpath
                    }else if(res.data.status==2){
                        this.isShow=true
                        this.isDiabl=true
                        this.status2="通过"
                        this.carbrand=res.data.carbrand;
                        this.carid=res.data.carid;
                        this.caraddress=res.data.caraddress
                        this.imageUrl=res.data.cpath
                    }
                }
            }).catch(res=>{

            })
        }
        ,
        methods:{
            OnSubmit(){
                if(this.schoolname==""||this.startDate==""||this.endDate==""||this.degree==""||this.imageUrl==""){
                    this.$message({
                        type:'info',
                        message: '请完成信息录入'
                    });
                }else{

                    this.formDate = new FormData()
                    this.$refs.upload.submit();
                    let config = {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    this.axios.post("http://localhost:10086/upload",this.formDate, config).then(res => {
                        this.axios({
                            url:"http://localhost:10086/att_car",
                            method:"POST",
                            withCredentials: true,
                            data:{
                                carbran:this.carbrand,
                                carid:this.carid,
                                caraddress:this.caraddress
                            }
                        }).then(res=>{
                            if(res.data==1){
                                const h = this.$createElement;

                                this.$notify({
                                    title: '成功',
                                    message: h('i', { style: 'color: teal'}, '提交成功！')
                                });
                                setTimeout(() => {
                                    location. reload()
                                }, 1500);
                            }else {
                                const h = this.$createElement;

                                this.$notify({
                                    title: '失败',
                                    message: h('i', { style: 'color: red'}, '提交失败，请重新填写资料！')
                                });
                            }
                        }).catch(res=>{
                            const h = this.$createElement;

                            this.$notify({
                                title: '失败',
                                message: h('i', { style: 'color: red'}, '提交失败，请重新填写资料！')
                            });
                        })
                    }).catch(res=>{
                        const h = this.$createElement;

                        this.$notify({
                            title: '失败',
                            message: h('i', { style: 'color: red'}, '提交失败，请重新填写资料！')
                        });
                    })


                }

            },
            uploadFile(file){
                this.formDate.append('file', file.file);
            },
            handleAvatarSuccess(file) {
                this.loading=true;
                setTimeout(() => {
                    this.loading = false;
                }, 1000);
                this.imageUrl = URL.createObjectURL(file.raw);
            }
        }
    }
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>