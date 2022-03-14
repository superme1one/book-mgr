import { defineComponent, reactive } from 'vue'
import { UserOutlined, LockOutlined, FileProtectOutlined } from '@ant-design/icons-vue'
import { auth } from '@/service';
import { message } from 'ant-design-vue';
export default defineComponent({
   components: {
      UserOutlined,
      FileProtectOutlined,
      LockOutlined
   },
   setup() {
      //注册数据设置和注册逻辑设置
      const regForm = reactive({
         account: '',
         password: '',
      });
      const  register = async() => {
         // if(regForm.account=='')
         // {
         //    message.info("请输入用户名");
         //    return;
         // }
         // if(regForm.password=='')
         // {
         //    message.info("请输入密码");
         //    return;
         // }
         const {data} = await auth.register(regForm.account, regForm.password);
         if(data.code){
            message.success(data.msg);
            return
         }
         
         message.error(data.msg);
         return
      }
      ////登录数据设置和登录逻辑设置
      const loginForm = reactive({
         account: '',
         password: '',
      });
      const login = async() => {
         if(loginForm.account=='')
         {
            message.info("请输入用户名");
            return;
         }
         if(loginForm.password=='')
         {
            message.info("请输入密码");
            return;
         }
         const {data} = await auth.login(loginForm.account, loginForm.password);

         if(data.code){
            message.success(data.msg);
            return
         }
         
         message.error(data.msg);
         return
      }
      return {
         regForm,
         register,
         loginForm,
         login,
         
      };
   },
})