//项目库的展示屏幕
import React, {
	Component,
	PropTypes
} from 'react';
import style from './screen.less'

class Screen extends Component {

	state = {
		// collapsed: false,
		url: '',
		testUrlMap: {
			"baidu": "http://www.baidu.com",
			"taobao": "https://www.taobao.com/"
		}
	};

	static productType = {
		0: '标准授权卡',
		1: '增值授权卡'
	}

	constructor(props) {
		super(props);
	}

	getUrl = () => {
		let t = this;
		let newUrl = t.state.testUrlMap[t.props.params.id];
		return t.state.url === newUrl?false:function(){t.setState({url: newUrl});return true;}()
	}

	componentDid() {
		let t = this;
		t.getUrl();
	}

	componentDidUpdate(newProps, newState) {
		let t = this;
		return t.getUrl();
	}

	render() {
		let t = this;
		return(
			<div className={style.content_window}>
				<iframe  className={style.content_iframe} src={t.state.url}/>
			</div>
		);
	}
}

export default Screen