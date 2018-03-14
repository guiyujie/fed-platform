import React from 'react'

class FooterContent extends React.Component {
	render() {
		return (
			<p>湖北盛天网络技术股份有限公司版权所有 鄂B2-20110110 Copyright © 2012 - {new Date().getFullYear()} 
			<a target="_blank" href="http://stnts.com/">STNTS</a>. All Rights Reserved</p>
		)
	}
}

export default FooterContent