import { h } from 'bk-lesscode-render'

export default {
    name: 'bkform-engine-int',
    props: {
        fieldData: {
            type: Object,
            default: () => ({})
        },
        disabled: Boolean
    },
    methods: {
        handleChange (val) {
            this.$emit('change', val)
        }
    },
    render (render) {
        h.init(render)

        const self = this

        return h({
            component: 'bk-input',
            props: {
                value: self.fieldData.configure.value,
                modelValue: self.fieldData.configure.value,
                placeholder: self.fieldData.configure.placeholder,
                disabled: self.disabled,
                type: 'number',
                ...self.fieldData.props
            },
            on: {
                change: self.handleChange
            }
        })
    }
}