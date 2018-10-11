<template>
    <el-container class="login-container">
        <el-header>
            <div class="login-top-title">
                <i class="iconfont icon-loginLogo logosvg"></i> 智慧能源云平台
            </div>
        </el-header>
        <el-main :style="{backgroundImage:'url(' + loginBG+ ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center',  backgroundSize:'100% 100%'}">
            <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
                <div class="title">用户登录</div>
                <el-form-item prop="username">
                    <i class="iconfont icon-name inputsvg"></i>
                    <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item prop="password">
                    <i class="iconfont icon-password inputsvg"></i>
                    <el-input name="password" :type="pwdType" v-model="loginForm.password" autoComplete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item prop="code" class="codebox">
                    <i class="iconfont icon-code inputsvg"></i>
                    <el-input name="code" type="text" @keyup.enter.native="handleLogin" v-model="loginForm.code" autoComplete="off" placeholder="请输入验证码"></el-input>
                    <div class="line"></div>
                    <img :src="loginBG" alt="" class="codeImg">
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :loading="loading" @click.native.prevent="handleLogin">
                        登 &nbsp;录
                    </el-button>
                </el-form-item>
            </el-form>
        </el-main>
        <el-footer><span>    ©2018-201x 深圳市深鹏达电网科技有点公司 粤ICP备x x x x x x号-x</span> </el-footer>
    </el-container>
</template>

<script>
    import loginBG from '@/assets/loginBG.png'
    export default {
        name: "login",
        data() {
            const validateUsername = (rule, value, callback) => {
                if (!value.trim()) {
                    callback(new Error("* 请输入正确的用户名"));
                } else {
                    callback();
                }
            };
            const validatePass = (rule, value, callback) => {
                if (value.length < 5) {
                    callback(new Error("* 密码不能小于5位"));
                } else {
                    callback();
                }
            };
            const validateCode = (rule, value, callback) => {
                if (value.length < 5) {
                    callback(new Error("* 验证码不少于4位"));
                } else {
                    callback();
                }
            };
            return {
                loginForm: {
                    username: "admin",
                    password: "123456",
                    code: 1234
                },
                loginRules: {
                    username: [{
                        required: true,
                        trigger: "blur",
                        validator: validateUsername
                    }],
                    password: [{
                        required: true,
                        trigger: "blur",
                        validator: validatePass
                    }],
                    code: [{
                        required: true,
                        trigger: "blur",
                        validator: validateCode
                    }],
                },
                loading: false,
                pwdType: "password",
                loginBG,
            };
        },
        methods: {
            showPwd() {
                if (this.pwdType === "password") {
                    this.pwdType = "";
                } else {
                    this.pwdType = "password";
                }
            },
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true;
                        this.$store
                            .dispatch("Login", this.loginForm)
                            .then(() => {
                                this.loading = false;
                                this.$router.push({
                                    path: "/"
                                });
                            })
                            .catch(() => {
                                this.loading = false;
                            });
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            }
        },
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .logosvg {
        font-size: 56px;
        color: #00367A;
        font-weight: 500;
    }
    $light_gray: #009688; //logo svg start
    .cls-1 {
        fill: none;
    }
    .cls-2 {
        clip-path: url(#clip-path);
    }
    .cls-3 {
        fill: #11366f;
    }
    .logosvg {
        width: 75px;
        height: 55px;
        vertical-align: middle;
    } //logo svg end
    .login-container {
        position: fixed;
        width: 100%;
        height: 100%;
        .el-header,
        .el-footer {
            height: 16.76% !important;
            width: 100%;
            background-color: #fff;
        }
        .el-header {
            position: relative;
            line-height: 16.76%;
            .login-top-title {
                font-family: "PangMenZhengDao";
                font-weight: 700;
                font-size: 42px;
                color: #393D49;
                position: absolute;
                left: 50%;
                bottom: 50%;
                transform: translateX(-50%) translateY(50%);
            }
        }
        .el-footer {
            position: relative;
            font-family: "MicrosoftYaHei";
            font-size: 14px;
            color: #666666;
            span {
                position: absolute;
                left: 50%;
                bottom: 26px;
                transform: translateX(-50%);
            }
        }
        .el-main {
            width: 100%;
            height: 66.48%;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .login-form {
                width: 400px;
                height: 438px;
                align-self: flex-end;
                margin-right: 14.74%;
                padding: 0 40px;
                background-color: #fff;
                border-radius: 4px;
                .title {
                    font-size: 28px;
                    font-weight: 400;
                    color: $light_gray;
                    text-align: center;
                    margin: 42px 0;
                    font-family: "PingFangSC-Medium";
                }
                .el-form-item {
                    margin-bottom: 26px;
                    position: relative;
                    .inputsvg {
                        position: absolute;
                        left: 16px;
                        top: 0;
                        color: #9b9b9b;
                        z-index: 2;
                    }
                    .el-button {
                        background-color: $light_gray;
                        width: 100%;
                        height: 46px;
                        font-size: 20px;
                        font-family: "PingFangSC-Medium";
                    }
                }
                .codebox {
                    line-height: 44px;
                    margin-bottom: 52px;
                    .line {
                        width: 1px;
                        height: 36px;
                        background: #dbd9da;
                        position: absolute;
                        right: 85px;
                        top: 5px;
                    }
                    .codeImg {
                        position: absolute;
                        right: 7px;
                        top: 8px;
                        width: 72px;
                        height: 28px;
                    }
                }
            }
        }
    }
</style>
