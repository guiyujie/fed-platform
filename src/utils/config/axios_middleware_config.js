import * as commonAction from 'actions/common_action'
import Ajax from 'Ajax'
import qs from 'qs'


export default {
    //请求出错时返回Promise reject
    returnRejectedPromiseOnError: true,
    //拦截器
    interceptors: {
        request: [{
            //处理成功请求
            success: ({
                getState,
                dispatch,
                getSourceAction
            }, config) => {
                //在每次请求前添加cancelKey,cancel请求
                config.reqId = new Date().getTime();
                config.cancelToken = Ajax.addRequest(config.reqId);
                dispatch(commonAction.optLoading('正在操作'));
                //如果是jsonp，则设置适配器来处理请求
                if(config.jsonp){
                    config.adapter = config => {
                        return Ajax.jsonp(config)
                    }
                }
                //如果是post方法，需要将data配置序列化
                if(config.method == 'post'){
                    config.data = qs.stringify(config.data)
                }
                return config
            },
            //处理失败请求
            error: ({
                getState,
                dispatch,
                getSourceAction
            }, error) => {
                return Promise.reject(error);
            }
        }],
        response: [{
            //处理成功返回
            success: ({
                getState,
                dispatch,
                getSourceAction
            }, res) => {
                //请求完成,移除cencel栈
                Ajax.removeRequest(res.config.reqId);
                const source = getSourceAction(res.config)
                const data = res.data
                /**
                 * 判断服务端返回状态
                 * 成功：
                 * {
                 *    result: true,
                 *    message: '',
                 *    data: null
                 * }
                 * 失败：
                 * {
                 *   result: false,
                 *   message: '',
                 *   data: null
                 * }
                 * 未登录：
                 * {
                 *   result: false,
                 *   code: 401,
                 *   message: '',
                 *   data: '/jsp/no_permission.html'
                 *  }
                 * 无权限：
                 * {
                 *    result: false,
                 *    code: 401,
                 *    message: '',
                 *    data: '/jsp/no_permission.html'
                 *  }
                 */
                const isSuccess = data && data.result
                const msg = data && data.message
                const code = data && data.code
                const url = data && data.data
                //请求成功
                if (isSuccess) {
                    dispatch(commonAction.optSuccess(msg))
                    return res
                }
                //未登录或无权限则跳转到后端返回的首页
                if(code == 401 || code == 403){
                    location.href = url
                    return res
                }
                //请求失败
                dispatch(commonAction.optError(msg))
                return res
            },
            //处理失败返回
            error: ({
                getState,
                dispatch,
                getSourceAction
            }, error) => {
                //取消操作错误不发出
                if (Ajax.axios.isCancel(error)) {
                    console.log('Request canceled',error.message);
                }else{
                    dispatch(commonAction.optError('网络异常'));
                    return Promise.reject(error);
                }
            }
        }]
    }
};
