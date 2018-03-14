import React from 'react'
import debounce from 'lodash/debounce'
import {AutoComplete} from 'antd'
import style from './autocomplete.less'

class IAutoComplete extends React.Component {
	constructor(props) {
		super(props);

	    //自动完成，300ms延迟
	    this.onSearch = debounce(this._onSearch, 300)

	    this.state = {

	    }
	}
	render(){
		const {dataSource, onChange} = this.props
		return(
			<AutoComplete
              style={{ width: 180 }}
              dataSource={dataSource || []}
              placeholder="输入..."
              allowClear={true}
              onSearch={this.onSearch.bind(this)}
              onChange={onChange.bind(this)}
            />
		)
	}

	_onSearch(value){
		const {onSearch} = this.props
		onSearch((value || '').trim())
	}
}

IAutoComplete.defaultProps = {
	dataSource:[],
	onSearch: ()=>{},
	onChange: ()=>{}
}

export default IAutoComplete
