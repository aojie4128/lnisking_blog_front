import SvgIcon from '@/components/SvgIcon/Index.vue'

const globalComponents = { SvgIcon }

export default {
    install(app) {
        // 遍历 globalComponents 对象，注册每一个全局组件
        for (const [name, component] of Object.entries(globalComponents)) {
            app.component(name, component)
        }
    }
}
