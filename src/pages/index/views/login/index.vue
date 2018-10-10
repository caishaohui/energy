<template>
    <el-container class="login-container">
        <el-header>
            <div class="login-top-title">
                <svg class="logosvg" id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 74 74"><defs>
                                                                                <clipPath id="clip-path"><rect class="cls-1" y="9.29" width="74" height="55.42"/></clipPath></defs><title>
                                                                                    平台logo</title><g class="cls-2"><path class="cls-3" d="M20.89,60.75H16.76a12.55,12.55,0,1,1,0-25.1H19a1.78,1.78,0,0,0,1.49-.7c.71-.79.44-1.5.44-2.37A19,19,0,0,1,39.76,13.63a18.62,18.62,0,0,1,12.71,4.92,5.9,5.9,0,0,0,.71.7,2.17,2.17,0,0,0,1.84,1,2.14,2.14,0,0,0,2.11-2.11,2.64,2.64,0,0,0-.88-1.84,4.88,4.88,0,0,0-.7-.62,22.73,22.73,0,0,0-15.8-6.31A23.13,23.13,0,0,0,16.67,31.26a16.68,16.68,0,0,0,0,33.35h4a2.14,2.14,0,0,0,2.11-2.11,1.81,1.81,0,0,0-1.94-1.75Zm39.18.18a3.69,3.69,0,1,0,1.08-2.6,3.69,3.69,0,0,0-1.08,2.6Zm0,0"/><path class="cls-3" d="M36,32.71a3.56,3.56,0,0,0,3.16-1.82h9l8.78,8.77,0,0h5.37a3.57,3.57,0,0,0,3,1.62,3.68,3.68,0,1,0-3.16-5.54H58.65l-7.19-7.08L49.75,27H39a3.56,3.56,0,0,0-3-1.61,3.68,3.68,0,0,0,0,7.36ZM70.33,46.22a3.62,3.62,0,0,0-3.41,2.24H53.4L42.82,59H36.61a3.5,3.5,0,0,0-1.85-1.54,3.69,3.69,0,1,0-2.7,6.87A3.73,3.73,0,0,0,36.48,63h8L55,52.37H67.28v0h.35a3.49,3.49,0,0,0,2.7,1.23A3.62,3.62,0,0,0,74,49.9a3.69,3.69,0,0,0-3.68-3.68Zm-36.8,1a3.58,3.58,0,0,0,3.13-1.78h6a3.56,3.56,0,0,0,3.12,1.78,3.68,3.68,0,1,0-3.06-5.69H36.59a3.67,3.67,0,1,0-3.06,5.69Zm0,0"/></g>
                                                                                    </svg> 智慧能源云平台
            </div>
        </el-header>
        <el-main :style="{backgroundImage:'url(' + loginBG+ ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center',  backgroundSize:'100% 100%'}">
            <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
                <div class="title">用户登录</div>
                <el-form-item prop="username" class="inputP">
                    <svg class="inputIcon" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                        <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
                                        <title>Group 125 Copy</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs></defs>
                                        <g id="Styles" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="UI-icons" transform="translate(-669.000000, -859.000000)">
                                                <g id="用户名" transform="translate(669.000000, 859.000000)">
                                                    <rect id="Rectangle-43-Copy-12" x="0" y="0" width="32" height="32"></rect>
                                                    <g id="user" transform="translate(5.562500, 2.031250)" fill="#9B9B9B" fill-rule="nonzero">
                                                        <path d="M20.04375,22.78125 C19.51875,21.540625 18.765625,20.425 17.809375,19.46875 C16.853125,18.5125 15.7375,17.759375 14.496875,17.234375 C14.075,17.05625 13.640625,16.90625 13.203125,16.784375 C14.440625,16.365625 15.575,15.665625 16.525,14.715625 C18.15,13.090625 19.046875,10.928125 19.046875,8.63125 C19.046875,6.334375 18.153125,4.171875 16.525,2.546875 C14.9,0.921875 12.7375,0.025 10.440625,0.025 C8.14375,0.025 5.98125,0.91875 4.35625,2.546875 C2.73125,4.171875 1.834375,6.334375 1.834375,8.63125 C1.834375,10.928125 2.728125,13.090625 4.35625,14.715625 C5.30625,15.665625 6.440625,16.365625 7.678125,16.784375 C7.240625,16.90625 6.80625,17.053125 6.384375,17.234375 C5.14375,17.759375 4.028125,18.5125 3.071875,19.46875 C2.115625,20.425 1.3625,21.540625 0.8375,22.78125 C0.29375,24.06875 0.01875,25.43125 0.01875,26.840625 C0.01875,27.4625 0.521875,27.965625 1.14375,27.965625 C1.765625,27.965625 2.26875,27.4625 2.26875,26.840625 C2.26875,24.65625 3.11875,22.603125 4.6625,21.059375 C6.20625,19.515625 8.259375,18.665625 10.44375,18.665625 C12.628125,18.665625 14.68125,19.515625 16.225,21.059375 C17.76875,22.603125 18.61875,24.65625 18.61875,26.840625 C18.61875,27.4625 19.121875,27.965625 19.74375,27.965625 C20.365625,27.965625 20.86875,27.4625 20.86875,26.840625 C20.8625,25.43125 20.5875,24.06875 20.04375,22.78125 Z M4.08125,8.63125 C4.08125,5.125 6.934375,2.275 10.4375,2.275 C13.940625,2.275 16.79375,5.125 16.79375,8.63125 C16.79375,12.1375 13.94375,14.9875 10.4375,14.9875 C6.93125,14.9875 4.08125,12.134375 4.08125,8.63125 Z" id="Shape"></path>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                                </svg>
                    <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="请输入用户名" />
                </el-form-item>
                <el-form-item prop="password" class="inputP">
                    <svg class="inputIcon" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
                                    <title>Group 193 Copy</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs></defs>
                                    <g id="Styles" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="UI-icons" transform="translate(-712.000000, -861.000000)">
                                            <g id="密码" transform="translate(712.000000, 861.000000)">
                                                <rect id="Rectangle-48-Copy-25" x="0" y="0" width="32" height="32"></rect>
                                                <g id="lock" transform="translate(5.406250, 1.968750)" fill="#9B9B9B" fill-rule="nonzero">
                                                    <path d="M20.346875,6.846875 C19.80625,5.5125 19.040625,4.31875 18.075,3.303125 C17.109375,2.278125 15.978125,1.46875 14.7125,0.9 C13.403125,0.315625 12.01875,0.01875 10.59375,0.01875 C9.16875,0.01875 7.78125,0.315625 6.471875,0.903125 C5.20625,1.46875 4.078125,2.278125 3.109375,3.303125 C2.134375,4.33125 1.36875,5.525 0.8375,6.846875 C0.284375,8.215625 0.003125,9.671875 0.003125,11.178125 L0.003125,25.871875 C0.003125,27.071875 0.93125,28.046875 2.075,28.046875 L19.103125,28.046875 C20.246875,28.046875 21.175,27.071875 21.16875,25.871875 L21.16875,12.903125 L21.175,12.30625 L21.175,11.178125 C21.18125,9.678125 20.9,8.221875 20.346875,6.846875 Z M7.303125,2.86875 L7.309375,2.86875 L7.35,2.853125 C8.371875,2.3875 9.4625,2.153125 10.590625,2.153125 C11.7125,2.153125 12.80625,2.390625 13.834375,2.846875 C14.83125,3.296875 15.7375,3.94375 16.521875,4.765625 C17.3125,5.6 17.928125,6.565625 18.3625,7.640625 C18.815625,8.759375 19.04375,9.946875 19.04375,11.178125 L19.04375,12.103125 L2.1375,12.103125 L2.1375,11.175 C2.1375,9.95625 2.365625,8.76875 2.81875,7.640625 C3.25625,6.55625 3.878125,5.590625 4.659375,4.76875 C5.4375,3.95 6.321875,3.309375 7.303125,2.86875 Z M19.053125,14.23125 L19.053125,25.86875 C19.053125,25.8875 19.05,25.903125 19.046875,25.9125 L2.14375,25.9125 C2.140625,25.903125 2.1375,25.8875 2.1375,25.86875 L2.1375,14.23125 L19.053125,14.23125 Z M9.60625,19.03125 L9.60625,21.828125 C9.60625,22.375 10.05,22.81875 10.596875,22.81875 C11.14375,22.81875 11.5875,22.375 11.5875,21.828125 L11.5875,19.025 C12.1125,18.6875 12.428125,18.11875 12.428125,17.4875 C12.428125,16.475 11.60625,15.653125 10.59375,15.653125 C9.58125,15.653125 8.759375,16.475 8.759375,17.4875 C8.7625,18.109375 9.084375,18.696875 9.60625,19.03125 Z" id="Shape"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                    <el-input name="password" :type="pwdType" v-model="loginForm.password" autoComplete="off" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item prop="code" class="inputP codebox">
                    <svg class="inputIcon" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <!-- Generator: Sketch 50.2 (55047) - http://www.bohemiancoding.com/sketch -->
                                    <title>Group 156 Copy</title>
                                    <desc>Created with Sketch.</desc>
                                    <defs></defs>
                                    <g id="Styles" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <g id="UI-icons" transform="translate(-770.000000, -859.000000)">
                                            <g id="验证码" transform="translate(770.000000, 859.000000)">
                                                <rect id="Rectangle-45-Copy-21" x="0" y="0" width="32" height="32"></rect>
                                                <g id="key" transform="translate(2.000000, 2.000000)" fill="#9B9B9B" fill-rule="nonzero">
                                                    <path d="M25.346875,12.61875 C22.1,9.371875 16.99375,9.125 13.4625,11.871875 L1.925,0.33125 C1.484375,-0.109375 0.771875,-0.109375 0.334375,0.33125 C-0.10625,0.771875 -0.10625,1.484375 0.334375,1.921875 L11.875,13.4625 C9.128125,16.99375 9.375,22.1 12.621875,25.346875 C16.1375,28.8625 21.834375,28.8625 25.35,25.346875 C28.865625,21.83125 28.8625,16.134375 25.346875,12.61875 Z M23.75625,23.75625 C21.11875,26.39375 16.846875,26.39375 14.209375,23.75625 C11.571875,21.11875 11.571875,16.846875 14.209375,14.209375 C16.846875,11.571875 21.11875,11.571875 23.75625,14.209375 C26.39375,16.846875 26.390625,21.11875 23.75625,23.75625 Z M8.99375,7.359375 L11.38125,4.971875 C11.821875,4.53125 11.821875,3.81875 11.38125,3.38125 C10.940625,2.940625 10.228125,2.940625 9.790625,3.38125 L7.403125,5.76875 L8.99375,7.359375 Z M8.375,1.96875 C8.815625,1.528125 8.815625,0.815625 8.375,0.378125 C7.9375,-0.0625 7.225,-0.0625 6.784375,0.378125 L4.396875,2.765625 L5.9875,4.35625 L8.375,1.96875 Z" id="Shape"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
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
        // position: fixed;
        width: 100%;
        .el-header,
        .el-footer {
            height: 181px !important;
            width: 100%;
            background-color: #fff;
        }
        .el-header {
            position: relative;
            line-height: 181px;
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
            height: 718px;
            padding: 0;
            display: flex;
            flex-direction: column;
            .login-form {
                width: 400px;
                height: 438px;
                align-self: flex-end;
                margin: 132px 283px 146px 0;
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
                    .inputIcon {
                        position: absolute;
                        left: 16px;
                        top: 13px;
                        z-index: 1;
                    }
                    .el-input {
                        border-color: #DBD9DA;
                    }
                    .el-button {
                        background-color: $light_gray;
                        width: 100%;
                        height: 46px;
                        font-size: 20px;
                        font-family: "PingFangSC-Medium";
                    }
                }
                .el-form-item:nth-of-type(4) {
                    margin-bottom: 52px;
                }
                .codebox {
                    line-height: 44px;
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
