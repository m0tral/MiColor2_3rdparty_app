import app from '@system.app';
import dev from '@system.device';
import router from '@system.router';
import brightness from '@system.brightness';

export default {

    data: {
        title: 'World by m0tral'
    },

    onShow() {
        brightness.setKeepScreenOn({ keepScreenOn: true });
    },

    onClickClose(e) {
        app.terminate();
    },

    onClickRight(e) {
        router.replace({uri: "pages/info/index" });
    },

    touchMove(option) {
        if (option.direction == "right") {
            app.terminate();
        }
        else if (option.direction == "left") {
            router.replace({uri: "pages/info/index" });
        }
    }
}
