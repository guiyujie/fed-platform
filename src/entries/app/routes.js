import React from 'react';
import { Route, IndexRoute } from 'react-router'
import App from 'containers/index/root'
import SysProjectManage from 'containers/sys_project_manage'
import NoMatch from 'containers/no_match'
import Screen from 'Coms/screen/screen'
function routes(param) {

    return (
        <Route path="/" component={App} breadcrumbName="凯狮业务管理平台">
            <Route path="fx">
            	<Route path="sys/project" component={SysProjectManage} breadcrumbName="项目库">
            		<Route path="screen/:id" component={Screen} />
            	</Route>
            </Route>
            <Route path="*" component={NoMatch}/>
        </Route>
      )
}
export default routes
