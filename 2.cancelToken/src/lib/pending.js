import Axios from 'axios';

const pendings = {};

export default {
  /**
   * 添加请求
   */
  addPending(config) { 
    const { method, url, params, data } = config;
    const id = [method, url, JSON.stringify(params), JSON.stringify(data)].join('&');
    const cancel = pendings[id];
    config.cancelToken = config.cancelToken || new Axios.CancelToken(function excutor(cancel) { 
      if (!pendings[id]) { 
        pendings[id] = cancel
      }
    })
    return config;
  },

  /**
   * 移除请求
   */
  removePending(config) { 
    const { method, url, params, data } = config;
    const id = [method, url, JSON.stringify(params), JSON.stringify(data)].join('&');
    const cancel = pendings[id];
    if (cancel && typeof cancel === 'function') {
      cancel();
      pendings.delete(identify);
    } 
  },

  /**
   * 清空所有pending请求
   */
  clearPending() { 
    Object.keys(pendings).forEach(c => pending[c]());
  },
}