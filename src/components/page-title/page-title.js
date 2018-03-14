import React from 'react'
import style from './page-title.less'

class PageTitle extends React.Component {
	render(){
		const {content} = this.props
		return(
            <div className={style.title}><i></i>{content}</div>
		)
	}
}

export default PageTitle
