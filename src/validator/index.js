import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN';

const dictionary = {
    zh_CN: {
        messages: {
            email: () => '邮箱格式不对',
            axisList: (field) => {
                return field + '不能多于2个'
            }
        },
        attributes: {
            email: '--邮箱--',
            axisList: 'axis',
        }
    }
};
Validator.addLocale(zh);
Validator.extend('axisList', {
    getMessage: () => 'axis不能多于2个',
    validate: list => list && list.length <= 2
});
Validator.updateDictionary(dictionary);

const config = {
    locale: 'zh_CN',
};
Vue.use(VeeValidate, config)