import React from 'react'
import { Link } from 'react-router';
import  style from './404.less'

const NoMatch = ({ location }) => (
    <div className={style.error_404}>
        <h1>
            Sorry！这个页面飞到外太空去了！
        </h1>
        <p>
            地址栏输入了错误的地址，该网页已被删除或移动
        </p>
        <div>
            <Link to="/" className={style.btn_home}>返回首页</Link>
        </div>
    </div>
)

export default NoMatch
