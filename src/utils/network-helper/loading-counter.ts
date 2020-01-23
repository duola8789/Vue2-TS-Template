/**
 * 全局 loading 计数器
 */
import {Loading} from 'element-ui';
import {ElLoadingComponent} from 'element-ui/types/loading';

class LoadingCounter {
    private count = 0;
    private loadingInstance!: ElLoadingComponent;

    getLoadings() {
        return this.count;
    }

    addLoading() {
        this.count++;
        if (this.getLoadings() <= 1) {
            this.loadingInstance = Loading.service({
                lock: true,
                background: 'rgba(0, 0, 0, 0.7)'
            });
        }
    }

    subLoading() {
        this.count--;
        if (this.getLoadings() === 0 && this.loadingInstance) {
            this.loadingInstance.close();
        }
    }

    clearLoading() {
        this.count = 0;
        this.loadingInstance && this.loadingInstance.close();
    }
}

export const loadingCounter = new LoadingCounter();
