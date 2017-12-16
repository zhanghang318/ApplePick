import React from 'react'
export default class AppList extends React.Component{
    constructor(){
        super();
        this.eatClickDetail = this.eatClickDetail.bind(this)
    }
    eatClickDetail(){
        const {eatClick,index} = this.props
        eatClick(index)
    }
    render(){
        const {name,weight,isEaten} = this.props
        return (
            <ul>
                {isEaten?"":<li>
                    <div className='left'>
                        <div className='name'>{name}</div>
                        <div className='weight'>{weight}</div>
                    </div>
                    <div className='operation'>
                        <span onClick={this.eatClickDetail}>吃掉</span>
                    </div>
                </li>}
            </ul>
        )
    }

}