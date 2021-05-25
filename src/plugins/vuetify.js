import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

const opts = {
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        dark: false,
        default: 'light',
        disable: false,
        options: {
            cspNonce: undefined,
            customProperties: undefined,
            minifyTheme: undefined,
            themeCache: undefined,
        },
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FB8C00',
                toolbar: '#fff',
                contrasttext: '#212121',
                cwa_green: '#6ACC8B',
                cwa_grey: '#B8C8D9',
                cwa_dark_grey: '#3F3F43',
                cwa_pink: '#FF919A',
                cwa_high_risk: '#BD1200',
                cwa_low_risk: '#2E854B',
                btn_primary: '#007FAD'
            },
            dark: {
                primary: '#2196F3',
                secondary: '#424242',
                accent: '#FF4081',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FB8C00',
                toolbar: '#212121',
                contrasttext: '#fff',
                cwa_green: '#6ACC8B',
                cwa_grey: '#B8C8D9',
                cwa_dark_grey: '#3F3F43',
                cwa_pink: '#FF919A',
                cwa_high_risk: '#BD1200',
                cwa_low_risk: '#6ACC8B',
                btn_primary: '#007FAD'
            },
        },
    }
}

export default new Vuetify(opts);
