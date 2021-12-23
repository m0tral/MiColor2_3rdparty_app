import dev from '@system.device';
import router from '@system.router';
import brightness from '@system.brightness';
import health from '@system.health';

export default {

    data: {
        title: 'World by m0tral',
        manu: 'noname',
        model: 'noname',
        IMEI: "no",
        steps: 0,
    },

    onInit() {
        dev.getInfo({
            success: (options) => {
                this.manu = options.manufacturer;
                this.model = options.model;
                this.IMEI = options.IMEI;

                this.steps = health.getTodaySteps();
            }
        });
    },

    onShow() {
        brightness.setKeepScreenOn({ keepScreenOn: true });
    },

    onClickLeft(e) {
        router.replace({uri: "pages/index/index" });
    },

    touchMove(option) {
        if (option.direction == "right") {
            router.replace({uri: "pages/index/index" });
        }
    }
}
